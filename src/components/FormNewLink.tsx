"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { createLinkForm } from "@/service/LinkService";
import { ValidatorResponse } from "@/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/constant/link";
import { toast } from "sonner";

const initialState: ValidatorResponse = {
    ok: true,
    message: '',
    object: null,
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            Shorten it
        </Button>
    );
}

function FormNewLink() {
    const [state, formAction] = useFormState(createLinkForm, initialState);
    const { push } = useRouter();

    useEffect(() => {
        if (state.ok === true && state?.object != null) {
            const link = JSON.parse(state.object);
            const id = link._id;
            toast("Link created successfully")
            push(`${Routes.INFO}/${id}`);
        }
    }, [state]);

    return (
        <form className="flex flex-col space-y-2" action={formAction}>
            <Input placeholder="My new link" id={'name'} name={'name'} />
            <Input placeholder="Introduce the link" id={'url'} name={'url'} className={`${state?.ok === false ? 'border-red-600' : ''}`} />
            <SubmitButton />
            <p className={`text-xs dark:text-gray-400 font-bold ${state?.ok ? 'text-green-700' : 'text-red-600 dark:text-red-600'}`}>{state?.message}</p>
        </form>
    )
}

export default FormNewLink