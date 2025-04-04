import { ExhibitProps } from "@/types";

export default async function getAllPosts(): Promise<ExhibitProps[]> {
    const API_KEY = process.env.API_KEY;
    const API_URL = `https://api.harvardartmuseums.org/exhibition?apikey=${API_KEY}`;

    const response = await fetch(API_URL);
    const data = await response.json();

    return data.records.map((p) => ({
        exhibitionid: p.exhibitionid,
        title: p.title,
        beginDate: p.begindate,
        endDate: p.enddate,
        url: p.url,
        primaryimageurl: p.primaryimageurl,
    }));
}
