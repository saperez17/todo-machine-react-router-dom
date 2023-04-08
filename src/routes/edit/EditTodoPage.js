import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams, useNavigate } from "react-router-dom";

const EditTodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = state;

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(Number(id));
    console.log("todo todo", todo);
    return (
      <TodoForm
        title="Editar TODO"
        defaultTodoText={todo.text}
        onSubmitText="Guardar"
        onSubmitTodo={(text) => {
          editTodo(text, Number(id));
          navigate("/");
        }}
        onCancelSubmit={() => navigate("/")}
      />
    );
  }
};

export { EditTodoPage };
