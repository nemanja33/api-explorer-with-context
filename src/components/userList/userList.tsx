import { useContext } from 'react';
import UserItem from '../userItem/userItem.tsx';
import { UserContext } from '../../context/users/userContext.tsx';
import styles from './styles.module.scss'
import ErrorMessage from '../errorMessage/errorMessage.tsx';

const UserList = () => {
  const ctx = useContext(UserContext);

  if (!ctx) return <ErrorMessage>Something went wrong!</ErrorMessage>

  if (ctx.error) return <ErrorMessage>{ctx.error}</ErrorMessage>

  if (!ctx.filteredUsers.length) {
    return <h2 className={styles.empty} data-testid="error-message">No item matches your search!</h2>
  }

  return (
    <ul className={styles.list} aria-live="polite">
      {ctx.filteredUsers.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  )
}

export default UserList;
