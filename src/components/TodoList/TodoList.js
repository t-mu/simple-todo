import { TodoItem } from '../TodoItem/TodoItem';
import { AddTodo } from '../AddTodo/AddTodo';

export const TodoList = ({ todos, onTodoAdd, onTodoRemove }) => {
  return (
    <div className="todolist-wrap">
      <AddTodo addTodo={onTodoAdd} />
      {todos.length > 0 ? (
        <ul className="todolist" data-testid="todo-list">
          {todos.map(({ title, id }, i) => (
            <TodoItem
              key={id}
              id={id}
              title={`${i + 1}. ${title}`}
              onRemove={onTodoRemove}
              data-testid="todo-list-item"
            />
          ))}
        </ul>
      ) : (
        <p data-testid="list-placeholder">Nothing todo...</p>
      )}
    </div>
  );
};
