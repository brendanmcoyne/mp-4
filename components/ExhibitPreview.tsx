import { ExhibitProps } from "@/types";
import Link from "next/link";

export default function ExhibitPreview({ post }: { post: ExhibitProps }) {
    return (
        <div className="bg-gray-500 rounded-2xl p-4 m-2 w-100">
            <h4 className="font-bold text-3xl">{post.title}</h4>
            <p>Exhibition ID: {post.exhibitionid}</p>
            <p>Start Date: {post.beginDate}</p>
            <p>End Date: {post.endDate}</p>
            <img src={post.primaryimageurl} className="w-full h-auto mt-2"/>
            <p className="text-center">
                <Link href={post.url} target="blank" className="font-bold underline">
                    Click here
                </Link> to see the artwork profile
            </p>
        </div>
    );
}
