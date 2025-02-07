import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function BirdsPage() {
  const birds = await db.query(`SELECT * FROM birds`);
  console.log(birds);
  const wrangledBirds = birds.rows;
  console.log(wrangledBirds);
  return (
    <>
      <h1>A list of all our available birds</h1>

      {wrangledBirds.map((bird) => (
        <div key={bird.id}>
          <Link href={`/birds/${bird.bird_name}`}>
            <h2>{bird.bird_name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
