import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 border  border-gray-300 rounded-lg shadow-lg">
        <h1>Loading States and Suspense workshop!</h1>

        <Link href="/slow">
          <button className="w-full p-3 mb-4 text-gray-800 rounded-md  bg-slate-200 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xl">
            slow
          </button>
        </Link>
        <Link href="/fast">
          <button className="w-full p-3 mb-4 text-gray-800 rounded-md border-2 border-gray-300 bg-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xl">
            fast
          </button>
        </Link>
      </div>
    </>
  );
}
