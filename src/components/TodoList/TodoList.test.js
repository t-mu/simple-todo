import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';

const mockRemove = jest.fn();
const mockAdd = jest.fn();
const mockTodos = [
  { id: '1', title: 'Eat porrige' },
  { id: '2', title: 'Make sleepings' },
];

test('renders todos', () => {
  render(
    <TodoList todos={mockTodos} onTodoAdd={mockAdd} onTodoRemove={mockRemove} />
  );

  const todoItems = screen.getAllByRole('listitem');

  expect(todoItems.length).toBe(2);
});
