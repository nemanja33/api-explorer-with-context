import { User } from '../../types/user'
import styles from './styles.module.scss'

const UserItem = (post: User) => {
  return (
    <li className={styles.item}>
      <span className={styles.title}>{post.title}</span>
      {post.completed && <span> ✅</span>}
    </li>
  )
}

export default UserItem