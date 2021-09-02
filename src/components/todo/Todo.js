import React from "react";

const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  const h4 = <h4>{title}</h4>;
  const text = completed ? <strike>{h4}</strike> : h4;

  return <div data-testid={`todo-${id}`}>{text}</div>;
};

export default Todo;
