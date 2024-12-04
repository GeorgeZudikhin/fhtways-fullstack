interface LosButtonProps {
    isValid: boolean;
    onClick: () => void;
}

export default function LosButton({
    isValid,
    onClick,
}: Readonly<LosButtonProps>) {
    return (
        <button
            className="mt-5 mb-7 w-1/4 px-6 py-2 rounded-full bg-blue-500"
            disabled={!isValid}
            onClick={onClick}
        >
            Los!
        </button>
    );
}
