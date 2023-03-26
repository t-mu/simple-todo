export const TodoItem = ({ title, id, onRemove }) => {
  return (
    <li id={id}>
      <div className="todo-title" data-testid="todo-title">
        {title}
      </div>
      <button
        className="button button--remove border-radius"
        onClick={() => onRemove(id)}
        data-testid="remove-todo-btn"
      >
        Remove
      </button>
    </li>
  );
};
