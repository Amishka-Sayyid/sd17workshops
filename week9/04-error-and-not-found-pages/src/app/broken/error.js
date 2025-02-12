"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-1  border border-gray-300 rounded-lg shadow-lg">
        <p>{error.message}</p>
        <button
          onClick={() => {
            reset();
          }}
          className=" p-3 mb-4 text-gray-800 rounded-md border-2 border-blue-400 "
        >
          Try again
        </button>
        <Link href={"/"} className="text-emerald-500">
          <button className=" p-3 mb-4 text-gray-800 rounded-md border-2 border-emerald-100 ">
            click here to go somewhere safe
          </button>
        </Link>
      </div>
    </>
  );
}
