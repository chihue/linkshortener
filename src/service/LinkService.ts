"use server";

import { getCollection } from "@/repository/MongoConfig";
import { ValidatorResponse, iLink } from "@/types";
import { generateTime } from "@/utils/Generators";
import { urlValidator } from "@/utils/Validators";
import { ObjectId } from "mongodb";
import { nanoid } from "nanoid";

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