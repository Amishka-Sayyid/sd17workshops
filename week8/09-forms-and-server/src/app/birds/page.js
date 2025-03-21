import { db } from "@/utils/dbConnection";
import Link from "next/link";
import birdsStyles from "@/app/birds/birds.module.css";
export default async function BirdsPage() {
  const birds = await db.query(`SELECT * FROM birds`);
  console.log(birds);
  const wrangledBirds = birds.rows;
  console.log(wrangledBirds);
  return (
    <>
      <h1 className={birdsStyles.birdsHeading}>
        A list of all our available birds
      </h1>

      {wrangledBirds.map((bird) => (
        <div key={bird.id} className={birdsStyles.birdsDiv}>
          <Link href={`/birds/${bird.bird_name}`}>
            <h2>{bird.bird_name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
