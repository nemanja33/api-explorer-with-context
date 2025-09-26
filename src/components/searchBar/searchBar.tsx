import React, { useContext } from "react";
import { UserContext } from "../../context/users/userContext.tsx";
import styles from './styles.module.scss'

const SearchBar = () => {
  const { setSearchQuery } = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchQuery(value);
  }

  return (
    <>
      <label className={styles.label} htmlFor="search">Search:</label>
      <input className={styles.search} name="search" id="search" type="text" onChange={handleChange} />
    </>
  )
};

export default SearchBar;