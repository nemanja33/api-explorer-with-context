import { UserItemProps } from '../../types/user'
import styles from './styles.module.scss'

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li className={styles.item} data-testid='list-item' >
      <span className={styles.title}>{user.title}</span>
      {user.completed && <span> ✅</span>}
    </li>
  )
}

export default UserItem;
