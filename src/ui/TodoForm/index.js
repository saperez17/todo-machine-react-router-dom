import React from "react";
import "./TodoForm.css";

function TodoForm({
  title,
  defaultTodoText,
  onSubmitText,
  onSubmitTodo,
  onCancelSubmit,
}) {
  const [newTodoValue, setNewTodoValue] = React.useState(
    () => defaultTodoText || ""
  );

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    onCancelSubmit();
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitTodo(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{title}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {onSubmitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
