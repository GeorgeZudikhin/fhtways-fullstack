interface AccessibilityButtonProps {
    iconPath: string;
    alt: string;
    title: string;
    onClick: () => void;
}

export default function AccessibilityButton({
    iconPath,
    alt,
    title,
    onClick,
}: Readonly<AccessibilityButtonProps>) {
    return (
        <button
            className="bg-none border-none p-0 m-0 cursor-pointer rounded-full w-12 h-12"
            onClick={onClick}
        >
            <img
                className="w-full h-full"
                src={iconPath}
                alt={alt}
                title={title}
            />
        </button>
    );
}
