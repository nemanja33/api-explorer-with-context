import { UserType } from "../../../hooks/useFetchData"

const UserItem = (post: UserType) => {
  return (
    <li className="user-list-item">
      <span className="user-list-title">{post.title}</span>
      {post.completed && <span> ✅</span>}
    </li>
  )
}

export default UserItem