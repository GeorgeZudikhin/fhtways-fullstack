import Navbar from "../components/Navbar";

export default function HowItWorksPage() {
    return (
        <>
            <Navbar />
            <main className="w-full mx-auto mt-24 p-6">
                <h1 className="text-3xl font-bold mb-4">How Does It Work?</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    FHTWays is a web navigation system designed for the visually
                    impaired. Users can enter their start and destination points
                    to receive a detailed text-based route. It is accessible,
                    fast, and user-friendly, providing step-by-step guidance to
                    navigate through the FHTW campus.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                    For example, to find Room F4.24 in Building F, Floor 4,
                    enter "F4.24" as the destination. Use accessibility features
                    to adjust font size, contrast, and spacing as needed.
                </p>
            </main>
        </>
    );
}
