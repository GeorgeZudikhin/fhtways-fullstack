import Button from "./Button";

interface PathDescriptionProps {
    startNode: string;
    endNode: string;
    pathDescription: string;
    onNewSearch: () => void;
}

export default function PathDescription({
    startNode,
    endNode,
    pathDescription,
    onNewSearch,
}: Readonly<PathDescriptionProps>) {
    return (
        <div className="text-center pb-6">
            <h2 className="text-4xl font-bold mb-5">
                {startNode} → {endNode}
            </h2>
            <p className="text-lg mb-6">{pathDescription}</p>
            <Button text="Start New Search" onClick={onNewSearch} />
        </div>
    );
}
