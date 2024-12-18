import logo from "../assets/NavBarLogo.png";
import { Link } from "react-router-dom";
import AccessibilityButtonGroup from "./AccessibilityButtonGroup";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 mr-2" />
                    <Link
                        to="/"
                        className="text-default text-2xl font-bold hover:opacity-80"
                    >
                        FHTWays
                    </Link>
                </div>

                <ul className="flex gap-8 items-center leading-none">
                    <li>
                        <Link
                            to="/how-it-works"
                            className="text-gray-700 text-lg hover:text-default transition-colors duration-200"
                        >
                            How does it work?
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact-us"
                            className="text-gray-700 text-lg hover:text-default transition-colors duration-200"
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
            <AccessibilityButtonGroup />
        </nav>
    );
}
