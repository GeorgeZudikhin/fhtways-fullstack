import Navbar from "../components/Navbar";

export default function ContactUsPage() {
    return (
        <>
            <Navbar />
            <main className="w-full mx-auto mt-24 p-6">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    If you have any feedback or suggestions, feel free to
                    contact:
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li>
                        <b>Yehor Zudikhin</b>: yehorzudikhin17@gmail.com
                    </li>
                    <li>
                        <b>Iris Nemec</b>: iris.nemec@technikum-wien.at
                    </li>
                </ul>
            </main>
        </>
    );
}
