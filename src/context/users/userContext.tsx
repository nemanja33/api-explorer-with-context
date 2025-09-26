import React, { createContext, useMemo, useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData.tsx";
import { User, UserContextValue } from "../../types/user";

export const UserContext = createContext<UserContextValue>({
  users: [],
  filteredUsers: [],
  error: null,
  searchQuery: "",
  setSearchQuery: () => {}
})

const UserProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { data: users, error } = useFetchData();
  const [, setFilteredData ] = useState<User[]>([]);
  const [ searchQuery, setSearchQuery ] = useState<string>("");

  useEffect(() => {
    setFilteredData(users as User[])
  }, [users])

  const filteredUsers = useMemo(() =>
    (users as User[]).filter(u => u.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, users]
  );
  const value = useMemo(() => ({users: users as User[], filteredUsers, error: error?.message || null, searchQuery, setSearchQuery }), [users, filteredUsers, error, searchQuery, setSearchQuery] )

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider