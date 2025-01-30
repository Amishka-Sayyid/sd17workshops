import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function UserPage() {
  let { username } = useParams();
  return (
    <>
      <h2>User: {username}</h2>
      <Link to={`/users/${username}`}>Users profile</Link>
      <Link to={`/users/${username}/posts`}>Users posts</Link>

      <Outlet />
    </>
  );
}
