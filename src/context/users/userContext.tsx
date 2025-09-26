import React, { createContext, useCallback, useEffect, useState } from "react";
import { useFetchData, UserType } from "../../hooks/useFetchData.tsx";

type UserContextType = {
  filteredData: UserType[];
  handleFilter: (input: string) => void;
}

export const UserContext = createContext<UserContextType>({
  filteredData: [],
  handleFilter: () => {}
})

const UserProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { data, error } = useFetchData();
  const [ filteredData, setFilteredData ] = useState<UserType[]>([])

  useEffect(() => {
    setFilteredData(data as UserType[])
  }, [data])

  const handleFilter = useCallback((input: string) => {
    const newData = (data as UserType[])?.filter((item) => 
      item?.title && item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(newData)
  }, [data, setFilteredData])

  if (error) return <div>{error?.message}</div>

  return (
    <UserContext.Provider value={{handleFilter, filteredData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider