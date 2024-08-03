import { Routes } from "@/constant/link";
import { getCollection } from "@/repository/MongoConfig";
import { saveLinkAccess } from "@/service/LinkService";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: { nanoid: string } }) {
    try {
        const { nanoid } = context.params;
        if (!nanoid || nanoid.length !== 11) throw new Error('Invalid link');

        const collection = await getCollection('links');
        const link = await collection.findOne({ short: nanoid }, { projection: { _id: 1, url: 1 } });

        if (!link) throw new Error('Link not found');

        saveLinkAccess({ link_id: link._id, req: request });

        return NextResponse.redirect(link.url);
    } catch (error) {
        return redirect(`${Routes.LINK}/error`);
    }

}

