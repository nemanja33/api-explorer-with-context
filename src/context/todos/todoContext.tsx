import React, { createContext, useMemo, useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData.tsx";
import { Todo, TodoContextValue } from "../../types/todo.ts";
import { ErrorType } from "../../types/logs.ts";

export const TodoContext = createContext<TodoContextValue | undefined>(
  undefined,
);
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<ErrorType | undefined>({ message: "" });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, fetchError } = useFetchData(API_URL);
  useEffect(() => {
    setError(fetchError as ErrorType);
    if (data) {
      setTodos(data as Todo[]);
    }
  }, [data, fetchError]);

  const filteredTodos = useMemo(
    () =>
      (todos as Todo[]).filter((u) =>
        u.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery, todos],
  );
  const value = useMemo(
    () => ({
      todos: todos as Todo[],
      filteredTodos,
      error: error?.message || null,
      searchQuery,
      setSearchQuery,
    }),
    [todos, filteredTodos, error, searchQuery, setSearchQuery],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
