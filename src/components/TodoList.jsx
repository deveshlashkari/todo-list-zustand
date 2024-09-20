import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
import useTodoStore from "../store/todoListStore";

const TodoList = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  console.log(todos);

  return (
    <>
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <Typography variant="h1" gutterBottom>
          Todo
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            label="Add a todo"
            variant="outlined"
            sx={{ width: "500px" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Box>
        <List>
          {todos.length > 0 ? (
            todos.map((_data, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      aria-label="complete"
                      onClick={() => toggleTodo(_data.id)}
                    >
                      <CheckIcon
                        color={_data.completed ? "success" : "default"}
                      />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeTodo(_data.id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={
                    <span
                      style={{
                        textDecoration: _data.isCompleted
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {_data.text}
                    </span>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" align="center" color="textSecondary">
              No todos yet. Add one above!
            </Typography>
          )}
        </List>
      </Container>
    </>
  );
};

export default TodoList;
