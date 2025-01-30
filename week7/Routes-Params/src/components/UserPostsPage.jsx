import { useParams } from "react-router-dom";
export default function UserPostsPage() {
  let { username } = useParams();
  return (
    <>
      <h2>User Comments</h2>
      <h3>These are the comments from user number {username}</h3>
    </>
  );
}
