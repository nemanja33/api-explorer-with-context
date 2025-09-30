import { useContext } from 'react';
import styles from './styles.module.scss'
import ErrorMessage from '../errorMessage/errorMessage.tsx';
import { TodoContext } from '../../context/todos/todoContext.tsx';
import TodoItem from '../todoItem/todoItem.tsx';

const TodoList = () => {
  const ctx = useContext(TodoContext);

  if (!ctx) return <ErrorMessage>Something went wrong!</ErrorMessage>

  if (ctx.error) return <ErrorMessage>{ctx.error}</ErrorMessage>

  if (!ctx.filteredTodos.length) {
    return <h2 className={styles.empty} data-testid="error-message">No item matches your search!</h2>
  }

  return (
    <ul className={styles.list} aria-live="polite">
      {ctx.filteredTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  )
}

export default TodoList;
