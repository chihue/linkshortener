"use server";

import { getCollection } from "@/repository/MongoConfig";
import { ValidatorResponse, iLink, iLinkAccess } from "@/types";
import { generateTime } from "@/utils/Generators";
import { urlValidator } from "@/utils/Validators";
import { ObjectId } from "mongodb";
import { nanoid } from "nanoid";
import { NextRequest } from "next/server";
import { getDeviceInfo, getGeoInfo } from "@/service/DeviceInfo";

export async function createLinkForm(
    previousState: any,
    formData: FormData,
): Promise<ValidatorResponse> {
    try {
        const data = {
            url: formData.get("url") as string ?? '',
            name: formData.get("name") as string,
        };

        const isValidURL = urlValidator(data.url);
        if (isValidURL.ok === false) {
            return {
                ok: false,
                message: isValidURL.message
            };
        }

        if (!data.name) data.name = 'My Link';

        const _nanoid = nanoid(11);

        const dataLink: iLink = {
            _id: new ObjectId(),
            name: data.name,
            url: data.url,
            short: _nanoid,
            time: generateTime(),
        };

        const collectionLinks = await getCollection('links');
        const insertedResult = await collectionLinks.insertOne(dataLink);

        if (insertedResult.insertedId) {
            return {
                ok: true,
                message: 'Creating link...',
                object: JSON.stringify(dataLink),
            };
        } else {
            throw new Error('Error creating link');
        }
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: 'Error creating link',
        };
    }
}

export async function saveLinkAccess({ link_id, req }: { link_id: ObjectId, req: NextRequest }) {
    let ip = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || req.headers.get('x-real-ip') || req.ip || '';
    if (ip.includes(',')) ip = ip.split(',')[0];
    const user_agent = req.headers.get('user-agent') || '';

    const geoInfo = await getGeoInfo(ip);
    console.log(geoInfo);
    const deviceInfo = await getDeviceInfo(user_agent);

    const link_access: iLinkAccess = {
        _id: new ObjectId(),
        link_id,
        time: generateTime(),
        ip,
        refer_url: req.headers.get('referer') || '',
        user_agent,
        device: deviceInfo.device,
        os: deviceInfo.os,
        browser: deviceInfo.browser,
        platform: deviceInfo.platform,
        country: geoInfo.country,
        region: geoInfo.region,
        city: geoInfo.city,
        timezone: geoInfo.timezone,
        isp: geoInfo.isp,
        org: geoInfo.org,
        cpu: deviceInfo.cpu,
    };

    const collectionLinksAccess = await getCollection('links_access');
    const inserted_result = await collectionLinksAccess.insertOne(link_access);

    return inserted_result.insertedId;
}