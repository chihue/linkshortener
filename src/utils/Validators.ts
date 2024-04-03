import { ValidatorResponse } from "@/types";

export function urlValidator(url: string): ValidatorResponse {
    if (!url || url.trim() === '') {
        return {
            ok: false,
            message: 'URL is required'
        }
    }

    // const urlPattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/i;
    // if (!urlPattern.test(url)) {
    //     return {
    //         ok: false,
    //         message: 'URL is not valid'
    //     }
    // }

    try {
        new URL(url);
    } catch (error) {
        return {
            ok: false,
            message: 'URL is not valid'
        }
    }

    return {
        ok: true,
        message: ''
    }
}