import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";

describe("TodoItem", () => {
  const title = "Test Todo";
  const id = "1";
  const onRemoveMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the given title", () => {
    const { getByTestId } = render(
      <TodoItem title={title} id={id} onRemove={onRemoveMock} />
    );
    const todoTitleElement = getByTestId("todo-title");
    expect(todoTitleElement.textContent).toBe(title);
  });

  it("handles the remove click", () => {
    const { getByTestId } = render(
      <TodoItem title={title} id={id} onRemove={onRemoveMock} />
    );
    const removeButtonElement = getByTestId("remove-todo-btn");
    fireEvent.click(removeButtonElement);
    expect(onRemoveMock).toHaveBeenCalledWith(id);
  });
});
