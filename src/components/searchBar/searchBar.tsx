import React, { useContext } from "react";
import { UserContext } from "../../context/users/userContext.tsx";
import styles from './styles.module.scss'
import { debounce } from "../../utils/helpers.ts";

const SearchBar = () => {
  const { setSearchQuery } = useContext(UserContext)

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchQuery(value);
  }, 200)

  return (
    <>
      <label className={styles.label} htmlFor="search">Search:</label>
      <input className={styles.search} name="search" id="search" type="text" onChange={handleChange} />
    </>
  )
};

export default SearchBar;