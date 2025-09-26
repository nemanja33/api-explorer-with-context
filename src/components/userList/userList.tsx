import { useContext } from "react";
import UserItem from "../userItem/userItem.tsx";
import { UserContext } from "../../context/users/userContext.tsx";
import styles from './styles.module.scss'

const UserList = () => {
  const { filteredUsers } = useContext(UserContext);

  return (
    <ul className={styles.list} aria-live="polite">
      {
        filteredUsers.map((post) => {
          return <UserItem key={post.id} {...post} />
        })
      }
    </ul>
  )
}

export default UserList;