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
            <h1 className="text-4xl font-bold mb-10 mt-3">
                Find Your Way Around FHTW
            </h1>
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-center gap-6"
            >
                <div className="flex gap-6 items-center justify-center">
                    <InputField
                        id="startNode"
                        label="Start"
                        control={control}
                        placeholder="Enter start point..."
                        error={errors.startNode}
                        options={getFilteredSuggestions("", endNode)}
                    />
                    <div className="flex items-center">
                        <p className="text-2xl font-bold">→</p>
                    </div>
                    <InputField
                        id="endNode"
                        label="Destination"
                        control={control}
                        placeholder="Enter destination..."
                        error={errors.endNode}
                        options={getFilteredSuggestions("", startNode)}
                    />
                </div>
                <Button text="Search" />
            </form>
        </>
    );
}
