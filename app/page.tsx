import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-900">
            <h1 className="text-5xl font-bold mt-10">Welcome to the Harvard Museum Exhibitions Page</h1>
            <p className="text-xl mt-4">Come explore historical exhibits and their priceless artifacts!</p>
            <Link href="/exhibits" className="mt-6 px-10 py-10 bg-gray-200 text-red-800 rounded-xl text-xl hover:bg-gray-300 transition">
                Explore now!
            </Link>
            <img src="/Harvard_University_coat_of_arms.svg.png" alt="Harvard logo" width={400} height={20} className="mt-10" />
        </div>
    );
}