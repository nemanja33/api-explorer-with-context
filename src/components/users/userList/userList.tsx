import { useContext } from "react";
import UserItem from "../userItem/userItem.tsx";
import { UserContext } from "../../../context/users/userContext.tsx";

const UserList = () => {
  const { filteredData} = useContext(UserContext);

  return (
    <ul className="user-list">
      {
        filteredData.map((post) => {
          return <UserItem key={post.id} {...post} />
        })
      }
    </ul>
  )
}

export default UserList;