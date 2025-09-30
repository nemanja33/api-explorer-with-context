export type Todo = {
  userId: string
  id: number
  title: string
  completed: boolean
}

export interface TodoContextValue {
  todos: Todo[]
  filteredTodos: Todo[]
  error: string | null
  searchQuery: string
  setSearchQuery: (q: string) => void
}

export interface TodoItemProps {
  todo: Todo
}
