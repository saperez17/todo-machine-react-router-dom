import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

const NewTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  const navigate = useNavigate();
  return (
    <TodoForm
      title="Escribe tu nuevo TODO"
      defaultTodoText=""
      onSubmitText="Añadir"
      onSubmitTodo={(newText) => {
        addTodo(newText);
        navigate("/");
      }}
      onCancelSubmit={() => navigate("/")}
    />
  );
};

export { NewTodoPage };
