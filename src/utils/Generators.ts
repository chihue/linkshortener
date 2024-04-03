import { iGenerateTime } from '@/types';
import dayjs from 'dayjs';

export const generateTime = (time: number | null = null, format = "DD/MM/YYYY HH:mm", milis = false, startOf = false): iGenerateTime => {
    if (time === null) {
        //Devolvemos el instante actual
        let fecha = dayjs();
        if (startOf) fecha = fecha.startOf('day');
        const ts = Math.ceil(fecha.valueOf() / 1000);
        const str = fecha.format(format);
        return {
            ts: ts,
            str: str,
        };
    }

    if (!milis && time) time = time * 1000;

    if (!time) time = dayjs().second();

    const fecha = dayjs(time);
    // if (!fecha.isValid()) return {
    //     ts: null,
    //     str: null,
    // };

    const ts = Math.ceil(fecha.valueOf() / 1000);

    // if (Number.isNaN(ts)) return {
    //     ts: null,
    //     str: null,
    // };

    const str = fecha.format(format);
    return {
        ts: ts,
        str: str,
    };
};


