import Link from "next/link"
import { Button } from "./ui/button"
import { Switch } from "./ui/switch"
import ThemeSwitch from "./ThemeSwitch"

function Header() {
    return (
        <header className="w-full border-b border-gray-100 dark:border-gray-800">
            <div className="container flex items-center justify-between h-14 px-4 md:px-6">
                <nav className="hidden md:flex items-center space-x-4 text-sm font-medium tracking-wide">
                    {/* <Link className="text-gray-900 dark:text-gray-50" href="#">
                        Platform
                    </Link>
                    <Link className="text-gray-900 dark:text-gray-50" href="#">
                        Solutions
                    </Link>
                    <Link className="text-gray-900 dark:text-gray-50" href="#">
                        Pricing
                    </Link>
                    <Link className="text-gray-900 dark:text-gray-50" href="#">
                        Company
                    </Link>
                    <Link className="text-gray-900 dark:text-gray-50" href="#">
                        Blog
                    </Link>
                    <Link className="text-gray-900 dark:text-gray-50" href="#">
                        Contact
                    </Link> */}
                </nav>
                <Link
                    className="hidden md:flex items-center space-x-4"
                    href="/"
                    
                >
                    Link Shortener
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    )
}

export default Header