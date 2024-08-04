const UAParser = require('ua-parser-js');

interface GeoInfo {
    country: string;
    region: string;
    city: string;
    timezone: string;
    isp: string;
    org: string;
}

// Interfaz para la información del dispositivo
interface DeviceInfo {
    device: string;
    os: string;
    browser: string;
    platform: string;
    cpu: string;
}

export async function getGeoInfo(ip: string): Promise<GeoInfo> {
    const url = `https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return {
        country: data.country || '',
        region: data.region || '',
        city: data.city || '',
        timezone: data.timezone || '',
        isp: data.org || '',
        org: data.org || '',
    };
}

export async function getDeviceInfo(user_agent: string): Promise<DeviceInfo> {
    const parser = new UAParser(user_agent);
    const result = parser.getResult();
    return {
        device: result.device.model || '',
        os: result.os.name || '',
        browser: result.browser.name || '',
        platform: result.os.name || '',
        cpu: result.cpu.architecture || '',
    };
}