import React, { useContext } from "react";
import { UserContext } from "../../../context/users/userContext.tsx";

const Search = () => {
  const { handleFilter } = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handleFilter(value);
  }

  return (
    <div className="wrap">
      <label className="user-label" htmlFor="search">Search:</label>
      <input className="user-search" name="search" type="text" onChange={handleChange} />
    </div>
  )
};

export default Search;