import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteBirdPage({ params }) {
  const slug = await params;
  async function handleDelete() {
    "use server";

    //query the db
    await db.query(`DELETE FROM birds WHERE bird_name = $1`, [slug.bird_name]);

    revalidatePath("/birds");
    redirect("/birds");
  }

  return (
    <>
      <h1>Delete a bird</h1>
      <form action={handleDelete}>
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Delete
        </button>
      </form>
    </>
  );
}
