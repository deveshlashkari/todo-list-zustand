import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Math.random().toString(36).substr(2, 9),
          text: todo,
          isCompleted: false,
        },
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    })),
}));

export default useTodoStore;
