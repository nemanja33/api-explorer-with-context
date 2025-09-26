import { lazy, Suspense } from 'react';
import UserProvider from '../../context/users/userContext.tsx';
import Spinner from '../spinner/spinner.tsx';
import SearchBar from '../searchBar/searchBar.tsx';

const UserList = lazy(() => import('../userList/userList.tsx'))

const Users = () => {
  return (
    <UserProvider>
      <SearchBar />
      <Suspense fallback={<Spinner />}>
        <UserList />
      </Suspense>
    </UserProvider>
  )
};

export default Users;
