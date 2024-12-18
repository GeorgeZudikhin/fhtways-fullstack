import fhtwlogo from "../assets/fhtw_logo.svg.png";
import AccessibilityButtonGroup from "./AccessibilityButtonGroup";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-xl fixed top-0 w-full flex justify-between items-center px-4 py-3">
            <img src={fhtwlogo} alt="FHTW Logo" className="h-10" />
            <h1 className="text-xl font-bold">FHTWays</h1>
            <AccessibilityButtonGroup />
        </nav>
    );
}
