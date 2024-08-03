import { Routes } from "@/constant/link"
import Link from "next/link"

function ErrorPage({
    title = "404 Not Found",
    description = "Sorry, we couldn't find the page you were looking for.",
    button = "Home",
    href = Routes.HOME,
    showButton = true,
}: {
    title?: string
    description?: string
    button?: string
    href?: string,
    showButton?: boolean
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 py-12 px-4">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">{title}</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {description}
                </p>
            </div>
            {showButton && <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href={href}
                >
                    {button}
                </Link>
            </div>}
        </div>
    )
}

export default ErrorPage