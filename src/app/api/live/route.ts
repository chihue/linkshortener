import { getCollection } from "@/repository/MongoConfig";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const collection = await getCollection('links');
    const mongo = await collection.countDocuments();

    return NextResponse.json({
        ok: true,
        message: 'Im live',
        db: mongo,
    });
}

