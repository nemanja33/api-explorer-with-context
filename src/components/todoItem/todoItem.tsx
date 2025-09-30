import { TodoItemProps } from '../../types/todo';
import styles from './styles.module.scss'

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={styles.item} data-testid='list-item' >
      <span className={styles.title}>{todo.title}</span>
      {todo.completed && <span> ✅</span>}
    </li>
  )
}

export default TodoItem;
