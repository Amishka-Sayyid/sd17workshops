// metadata
export const metadata = {
  title: "Posts - Next.js",
  description: "A simple blog built with Next.js",
};

// --------------
// import pg from "pg";
import { db } from "@/utils/utilities.js";
export default async function PostsPage() {
  // const db = new pg.Pool({
  //   connectionString: process.env.NEXT_POSTGRES,
  // });

  const posts = (await db.query(`SELECT * FROM posts`)).rows;

  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
