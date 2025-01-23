import Button from "./Button";

interface PathDescriptionProps {
    startNode: string;
    endNode: string;
    pathDescription: string[];
    onNewSearch: () => void;
}

export default function PathDescription({
    startNode,
    endNode,
    pathDescription,
    onNewSearch,
}: Readonly<PathDescriptionProps>) {
    console.log(pathDescription);

    return (
        <div className="text-center pb-6">
            <h2 className="text-4xl font-bold mb-5">
                {startNode} → {endNode}
            </h2>
            <div
                className="text-lg mb-6 text-left mx-auto"
                style={{ maxWidth: "600px" }}
            >
                {pathDescription.map((instruction, index) => (
                    <p key={index} className="mb-4 flex items-start">
                        <span className="mr-2 text-default">→</span>
                        <span>{instruction}</span>
                    </p>
                ))}
            </div>
            <Button text="Start New Search" onClick={onNewSearch} />
        </div>
    );
}
