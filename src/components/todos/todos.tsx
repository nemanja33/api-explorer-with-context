import { lazy, Suspense } from 'react';
import Spinner from '../spinner/spinner.tsx';
import SearchBar from '../searchBar/searchBar.tsx';
import TodoProvider from '../../context/todos/todoContext.tsx';

const TodoList = lazy(() => import('../todoList/todoList.tsx'))

const Todos = () => {
  return (
    <TodoProvider>
      <SearchBar />
      <Suspense fallback={<Spinner />}>
        <TodoList />
      </Suspense>
    </TodoProvider>
  )
};

export default Todos;
