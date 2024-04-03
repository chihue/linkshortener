import { ObjectId } from "mongodb";

export interface ValidatorResponse {
    ok: boolean;
    message: string;
    object?: string | null;
}

export interface iGenerateTime {
    ts: number;
    str: string;
}

export interface iLink {
    _id: ObjectId;
    name: string;
    url: string;
    short: string;
    time: iGenerateTime;
}