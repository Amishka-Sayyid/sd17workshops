export default async function CommentPage({ params }) {
  const Allparams = await params;
  console.log(Allparams);
  return (
    <h1>
      UserID: {Allparams.id}, Comment ID: {Allparams.commentId}
    </h1>
  );
}
