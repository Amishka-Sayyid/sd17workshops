import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserProfile() {
  let { id } = useParams();

  return (
    <>
      <h1>Hello, user number {id}!</h1>
      <button>
        <Link to={"/users/:id/:comment"}>user comment</Link>
      </button>
      <Outlet />
    </>
  );
}
