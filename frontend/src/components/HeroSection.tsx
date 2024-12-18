import { Control, FieldErrors } from "react-hook-form";
import { PathRequest } from "../api/find-path/findPath";
import InputField from "./InputField";
import Button from "./Button";

interface HeroSectionProps {
    startNode: string;
    endNode: string;
    onSubmit: () => void;
    control: Control<PathRequest>;
    errors: FieldErrors<PathRequest>;
    getFilteredSuggestions: (input: string, exclude: string) => string[];
}

export default function HeroSection({
    startNode,
    endNode,
    onSubmit,
    control,
    errors,
    getFilteredSuggestions,
}: Readonly<HeroSectionProps>) {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Navigate FHTW Easily</h2>
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-center gap-4"
            >
                <div className="flex gap-4 items-center justify-center">
                    <InputField
                        id="startNode"
                        label="Start"
                        control={control}
                        placeholder="Enter start point..."
                        error={errors.startNode}
                        options={getFilteredSuggestions("", endNode)}
                    />
                    <h2 className="text-2xl font-bold mb-4">➡</h2>
                    <InputField
                        id="endNode"
                        label="Destination"
                        control={control}
                        placeholder="Enter destination..."
                        error={errors.endNode}
                        options={getFilteredSuggestions("", startNode)}
                    />
                </div>
                <Button text="Find Route" />
            </form>
        </>
    );
}
