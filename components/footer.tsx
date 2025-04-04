import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-15 bg-gray-200 flex justify-center items-center">
            <p className="text-center text-sm font-medium">
                All rights reserved by Brendan Coyne <Link href="" className="underline">Credits</Link> &#169;
            </p>
        </footer>
    );
}