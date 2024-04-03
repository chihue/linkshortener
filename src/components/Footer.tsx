import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 dark:border-gray-800">
            {/* <div className="container flex flex-col gap-4 md:gap-8 py-6 pb-6 md:py-12 md:pb-12 grid-cols-3 items-center justify-center text-center md:grid md:text-left">
                <div className="space-y-2">
                    <Link className="inline-block space-x-2 font-medium" href="#">
                        <span className="font-semibold tracking-tighter">Home</span>
                    </Link>
                    <p className="text-xs text-gray-500 dark:text-gray-400">The all-in-one platform for frontend teams</p>
                </div>
                <nav className="flex flex-col gap-2 md:flex-row md:justify-center lg:gap-4 xl:gap-2">
                    <Link className="inline-block text-sm font-medium tracking-wide" href="#">
                        Platform
                    </Link>
                    <Link className="inline-block text-sm font-medium tracking-wide" href="#">
                        Solutions
                    </Link>
                    <Link className="inline-block text-sm font-medium tracking-wide" href="#">
                        Pricing
                    </Link>
                    <Link className="inline-block text-sm font-medium tracking-wide" href="#">
                        Company
                    </Link>
                    <Link className="inline-block text-sm font-medium tracking-wide" href="#">
                        Blog
                    </Link>
                    <Link className="inline-block text-sm font-medium tracking-wide" href="#">
                        Contact
                    </Link>
                </nav>
                <div className="flex flex-col gap-2 md:justify-end lg:gap-4 xl:gap-2">
                    <form className="flex flex-row gap-2 md:gap-4">
                        <Input
                            className="h-10 text-sm max-w-[200px] flex-1"
                            placeholder="Enter your email"
                            required
                            type="email"
                        />
                        <Button className="h-10 text-sm" type="submit">
                            Sign Up
                        </Button>
                    </form>
                    <div className="flex flex-row items-center gap-2 text-sm md:gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Vercel Inc. All rights reserved.</p>
                        <div className="flex gap-2 md:ml-auto">
                            <Link
                                className="inline-block text-sm text-gray-500 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Terms
                            </Link>
                            <Link
                                className="inline-block text-sm text-gray-500 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    );
}

export default Footer