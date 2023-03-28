import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components', () => ({ TodoList: () => <div>MockTodoList</div> }));

test('renders correct heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('Simple todo');
});

test('renders TodoList', () => {
  render(<App />);
  const todoList = screen.getByText('MockTodoList');
  expect(todoList).toBeVisible();
});
