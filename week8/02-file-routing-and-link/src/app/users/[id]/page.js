export default async function IdPage({ params }) {
  const idParams = await params;
  console.log(idParams);
  return (
    <>
      <h1>Id Page</h1>

      <p>user Id: {idParams.id}</p>
    </>
  );
}
