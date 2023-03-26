import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const onTodoAdd = () => {
    const todo = {
      id: uuid(),
      title,
    };

    if (title !== '') {
      addTodo(todo);
      setTitle('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onTodoAdd();
    }
  };

  return (
    <div className="todo-form">
      <input
        className="border-radius"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={handleKeyDown}
        data-testid="add-todo-input"
      />
      <button
        className="button button--add border-radius"
        onClick={onTodoAdd}
        data-testid="add-todo-btn"
      >
        Add
      </button>
    </div>
  );
};
