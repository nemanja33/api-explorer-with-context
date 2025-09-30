import React, { useContext } from 'react';
import styles from './styles.module.scss'
import { debounce } from '../../utils/helpers.ts';
import { TodoContext } from '../../context/todos/todoContext.tsx';

const SearchBar = () => {
  const todoContext = useContext(TodoContext)

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (todoContext) {
      todoContext.setSearchQuery(value);
    }
  }, 200)

  return (
    <>
      <label className={styles.label} htmlFor="search">
        Search:
      </label>
      <input
        className={styles.search}
        name="search"
        id="search"
        type="text"
        placeholder='Search...'
        onChange={handleChange}
      />
    </>
  )
};

export default SearchBar;
