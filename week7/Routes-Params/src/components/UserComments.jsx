import { useParams } from "react-router-dom";
export default function UserComments() {
  let { id } = useParams();
  let { comment } = useParams();

  return (
    <>
      <h2>User Comments</h2>
      <h3>These are the comments from user number {id}</h3>
      <p>{comment}</p>
    </>
  );
}
