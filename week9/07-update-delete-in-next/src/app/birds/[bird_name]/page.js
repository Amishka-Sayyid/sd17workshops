import { db } from "@/utils/dbConnection";
import Link from "next/link";
export default async function BirdNamePage({ params }) {
  const birdParams = await params;
  console.log(birdParams.bird_name);
  const bird = await db.query(`SELECT * FROM birds WHERE bird_name = $1`, [
    birdParams.bird_name,
  ]);

  const wrangledBird = bird.rows;

  console.log(wrangledBird);

  return (
    <>
      {wrangledBird.map((oneBird) => (
        <div
          key={oneBird.id}
          className="flex flex-col items-center justify-center gap-3 p-6  h-[300px] w-full text-lg "
        >
          <h1>Bird Name: {oneBird.bird_name}</h1>
          <p>Size: {oneBird.bird_size}</p>
          <p>Fluffiness: {oneBird.fluffiness}</p>
          <p>Colour: {oneBird.bird_colour}</p>
          <p>Personality: {oneBird.personality}</p>
          <button>
            <Link
              href={`/birds/${oneBird.bird_name}/update-bird`}
              className="w-full  mt-6 p-1 text-gray-800 rounded-md border-2 border-emerald-300 "
            >
              update-bird
            </Link>
          </button>
          <br />
          <button>
            <Link
              href={`/birds/${oneBird.bird_name}/delete-bird`}
              className="w-full  mt-6 p-1 text-gray-800 rounded-md border-2 bg-red-300 "
            >
              delete-bird
            </Link>
          </button>
        </div>
      ))}

      <div></div>
    </>
  );
}
