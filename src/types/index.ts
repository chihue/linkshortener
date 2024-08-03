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

export interface iLinkAccess {
    _id: ObjectId;
    link_id: ObjectId;
    time: iGenerateTime;
    ip: string;
    refer_url: string;
    user_agent: string;
    device: string;
    os: string;
    browser: string;
    platform: string;
    country: string;
    region: string;
    city: string;
    timezone: string;
    isp: string;
    org: string;
    cpu: string;
}