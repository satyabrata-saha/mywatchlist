import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex gap-4 flex-col items-center justify-center h-screen ">
      <h2 className="text-3xl sm:text-4xl font-bold">404 | Not Found</h2>
      <p className="text-lg sm:text-xl opacity-50">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-lg sm:text-xl text-blue-500 hover:underline"
      >
        Return Home
      </Link>
    </div>
  );
}
