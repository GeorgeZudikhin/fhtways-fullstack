import Logo from "../assets/Logo.jpg";
import fhtwlogo from "../assets/fhtw_logo.svg.png";

export default function LogoArea() {
    return (
        <div className="h-40">
            <img
                className="absolute w-[17%] h-auto left-96"
                src={Logo}
                alt="Project Logo"
            />
            <img
                className="absolute w-[11%] h-auto left-2.5 top-2.5"
                src={fhtwlogo}
                alt="FHTW Logo"
            />
        </div>
    );
}
