import React from "react";
import { render } from "@testing-library/react";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  const todos = [
    { id: "1", title: "Todo 1" },
    { id: "2", title: "Todo 2" },
    { id: "3", title: "Todo 3" },
  ];
  const onTodoAddMock = jest.fn();
  const onTodoRemoveMock = jest.fn();

  it("renders the correct amount of todos", () => {
    const { getAllByTestId } = render(
      <TodoList
        todos={todos}
        onTodoAdd={onTodoAddMock}
        onTodoRemove={onTodoRemoveMock}
      />
    );
    const todoElements = getAllByTestId("todo-list-item");
    expect(todoElements).toHaveLength(todos.length);
  });
});
