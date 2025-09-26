import { lazy, Suspense } from "react";
import UserProvider from "../../context/users/userContext.tsx";
import Spinner from "../spinner/spinner.tsx";
import Search from "./search/search.tsx";

const UserList = lazy(() => import('./userList/userList.tsx'))

const Users = () => {
  return (
    <UserProvider>
      <Search />
      <Suspense fallback={<Spinner />}>
        <UserList />
      </Suspense>
    </UserProvider>
  )
};

export default Users