import { render, screen } from "@testing-library/react";
import Todo from "../todo";
import renderer from "react-test-renderer";

test("should render non-completed todo", () => {
  const todo = { id: 1, title: "prepare breakfast", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("prepare breakfast");
  expect(todoElement).not.toContainHTML("<strike>");
});

//snapshot testing
test("matches snapshot", () => {
  const todo = { id: 1, title: "prepare breakfast", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
