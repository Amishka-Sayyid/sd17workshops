import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-1  border border-gray-300 rounded-lg shadow-lg">
        <h1>
          Sorry, this bird is not there click on button below please to return
          to bird page
        </h1>
        <Link href={"/birds"}>
          <button className=" p-3 mb-4 text-gray-800 rounded-md border-2 border-emerald-100 ">
            Find other birds here
          </button>
        </Link>
      </div>
    </>
  );
}
