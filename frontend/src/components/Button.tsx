interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export default function Button({ onClick, text }: Readonly<ButtonProps>) {
    return (
        <button
            onClick={onClick}
            className="btn btn-secondary px-6 py-2 bg-gray-200 rounded-lg"
        >
            {text}
        </button>
    );
}
