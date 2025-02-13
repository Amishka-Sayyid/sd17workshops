import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewBirdPage() {
  async function handleSubmit(formValues) {
    "use server";

    const birdName = formValues.get("bird_name");
    const birdSize = formValues.get("bird_size");
    const fluffiness = formValues.get("fluffiness");
    const birdColour = formValues.get("bird_colour");
    const personality = formValues.get("personality");

    db.query(
      `INSERT INTO birds (bird_name, bird_size, fluffiness, bird_colour, personality) VALUES ($1, $2, $3, $4, $5)`,
      [birdName, birdSize, fluffiness, birdColour, personality]
    );

    revalidatePath("/birds");

    redirect("/birds");
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center bg-gray-100">
        <h1>Add a new bird to the website</h1>

        <form
          action={handleSubmit}
          className="flex flex-col justify-center items-center border-2 border-solid border-gray-500 w-[25rem] p-6 rounded-lg"
        >
          <label htmlFor="bird_name">Bird name: </label>

          <input
            type="text"
            name="bird_name"
            id="bird_name"
            className="text-emerald-600"
          />

          <label htmlFor="bird_size">Bird size: </label>
          <input
            type="text"
            name="bird_size"
            id="bird_size"
            className="text-emerald-600"
          />

          <label htmlFor="fluffiness">Fluffiness: </label>
          <input
            type="number"
            name="fluffiness"
            id="fluffiness"
            min={1}
            max={10}
            className="text-emerald-600"
          />

          <label htmlFor="bird_colour">Colour: </label>
          <input
            type="text"
            name="bird_colour"
            id="bird_colour"
            className="text-emerald-600"
          />

          <label htmlFor="personality">Personality: </label>
          <input
            type="text"
            name="personality"
            id="personality"
            className="text-emerald-600"
          />

          <button
            type="submit"
            className="border-emerald-600 border-4 m-4 hover:bg-green-100"
          >
            Submit your bird
          </button>
        </form>
      </div>
    </>
  );
}
