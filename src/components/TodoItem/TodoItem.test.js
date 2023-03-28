import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';

const mockRemove = jest.fn();

test('renders todo title', () => {
  render(<TodoItem id={'123-abc'} title={'test'} onRemove={mockRemove} />);
  const title = screen.getByTestId('todo-title');

  expect(title.textContent).toEqual('test');
});

test('handles remove todo click', () => {
  render(<TodoItem id={'123-abc'} title={'test'} onRemove={mockRemove} />);
  const removeTodoBtn = screen.getByTestId('remove-todo-btn');

  fireEvent.click(removeTodoBtn);

  expect(mockRemove).toHaveBeenCalledWith('123-abc');
});
