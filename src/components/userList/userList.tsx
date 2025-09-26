import { useContext } from 'react';
import UserItem from '../userItem/userItem.tsx';
import { UserContext } from '../../context/users/userContext.tsx';
import styles from './styles.module.scss'
import ErrorMessage from '../errorMessage/errorMessage.tsx';

const UserList = () => {
  const { filteredUsers, error } = useContext(UserContext);

  if (error) return <ErrorMessage>{error}</ErrorMessage>

  if (!filteredUsers.length) {
    return <h2 className={styles.empty}>No item matches your search!</h2>
  }

  return (
    <ul className={styles.list} aria-live="polite">
      {filteredUsers.map((post) => {
        return <UserItem key={post.id} {...post} />;
      })}
    </ul>
  )
}

export default UserList;
