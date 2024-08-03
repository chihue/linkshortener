"use client"
import { useEffect } from 'react'

function AddLocalStorage({ keyLS, data, isArray = false }: { keyLS: string, data: any, isArray: boolean }) {
    useEffect(() => {
        // console.log('Adding to local storage', keyLS, data);
        if (!data || !keyLS) return;
        if (isArray) {
            const array = JSON.parse(localStorage.getItem(keyLS) || "[]");
            if (array.includes(data)) return; //return console.log('Already in local storage', keyLS, data);
            array.push(data);
            localStorage.setItem(keyLS, JSON.stringify(array));
        } else {
            localStorage.setItem(keyLS, data);
        }
        // console.log('Added to local storage', keyLS, data);
    }, [data, keyLS, isArray]);

    return null;
}

export default AddLocalStorage