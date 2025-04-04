"use client";

import { ExhibitProps } from "@/types";
import ExhibitPreview from "./ExhibitPreview";

export default function ExhibitDisplay({ inputPosts }: { inputPosts: ExhibitProps[] }) {
    return (
        <div>
            <h3 className="font-bold text-center text-5xl p-4">Exhibits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                {inputPosts.map((p) => (
                    <ExhibitPreview key={p.exhibitionid} post={p} />
                ))}
            </div>
        </div>
    );
}
