import React, { createContext, useMemo, useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData.tsx";
import { User, UserContextValue } from "../../types/user";
import { ErrorType } from "../../types/logs.ts";

export const UserContext = createContext<UserContextValue | undefined>(undefined)
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const UserProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [ users, setUsers ] = useState<User[]>([])
  const [ error, setError ] = useState<ErrorType | undefined>({ message: "" })
  const [ searchQuery, setSearchQuery ] = useState<string>("");
  
  const { data, fetchError } = useFetchData(API_URL);
  useEffect(() => {
    setError(fetchError);
    if (data) {
      setUsers(data);
    }
  }, [users, data, fetchError])

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