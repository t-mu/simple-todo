import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from './AddTodo';
import userEvent from '@testing-library/user-event';

const mockAdd = jest.fn();
jest.mock('uuid', () => ({ v4: () => 'abbaceedee' }));

test('renders todo title', () => {
  render(<AddTodo addTodo={mockAdd} />);
  const addTodoInput = screen.getByTestId('add-todo-input');

  expect(addTodoInput.value).toEqual('');
});

test('handles add todo click with empty input', () => {
  render(<AddTodo addTodo={mockAdd} />);
  const addTodoInput = screen.getByTestId('add-todo-input');
  const addTodoBtn = screen.getByTestId('add-todo-btn');

  fireEvent.change(addTodoInput, { target: { value: '' } });
  fireEvent.click(addTodoBtn);

  expect(mockAdd).not.toHaveBeenCalled();
});

test('handles add todo click with non-empty input', () => {
  render(<AddTodo addTodo={mockAdd} />);
  const addTodoInput = screen.getByTestId('add-todo-input');
  const addTodoBtn = screen.getByTestId('add-todo-btn');

  fireEvent.change(addTodoInput, { target: { value: 'This is a test' } });
  fireEvent.click(addTodoBtn);

  expect(mockAdd).toHaveBeenCalledWith({
    id: 'abbaceedee',
    title: 'This is a test',
  });
});

test('handles keydown event', () => {
  render(<AddTodo addTodo={mockAdd} />);
  const addTodoInput = screen.getByTestId('add-todo-input');

  fireEvent.change(addTodoInput, { target: { value: 'This is a test' } });
  fireEvent.keyDown(addTodoInput, { key: 'Enter' });

  expect(mockAdd).toHaveBeenCalledWith({
    id: 'abbaceedee',
    title: 'This is a test',
  });
});
