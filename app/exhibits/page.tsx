import ExhibitDisplay from "@/components/ExhibitDisplay";
import getAllPosts from "@/lib/getAllPosts";

export default async function Exhibits() {
    const posts = await getAllPosts();

    return (
        <div className="flex flex-col items-center bg-red-900 p-4">
            <ExhibitDisplay inputPosts={posts} />
        </div>
    );
}