export type User = {
  userId: string,
  id: number,
  title: string,
  completed: boolean
}

export interface UserContextValue {
  users: User[];
  filteredUsers: User[];
  error: string | null;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}