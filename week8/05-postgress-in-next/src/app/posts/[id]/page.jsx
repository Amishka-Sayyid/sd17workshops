import pg from "pg";

export default async function Post({ params }) {
  const slug = await params;
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`))
    .rows;

  return (
    <div>
      {post.map((post) => (
        <div>
          <h2 key={post.id}>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
