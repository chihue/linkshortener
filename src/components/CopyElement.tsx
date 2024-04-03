"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"

function CopyElement({
    text
}: {
    text: string
}) {
    return (
        <Button className="ml-2"
            onClick={() => {
                navigator.clipboard.writeText(text)
                toast("Copied to clipboard")
            }}
            size={"sm"}
        >
            Copy
        </Button>
    )
}

export default CopyElement