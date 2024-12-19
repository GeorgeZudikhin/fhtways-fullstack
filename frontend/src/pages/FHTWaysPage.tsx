import { useState } from "react";
import { useForm } from "react-hook-form";
import { PathRequest } from "../api/find-path/findPath";
import { useFindPath } from "../api/find-path/useFindPath";
import { validNodes } from "../types/validNodes";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PathDescription from "../components/PathDescription";

const emptyPathRequest: PathRequest = {
    startNode: "",
    endNode: "",
};

export default function FHTWaysPage() {
    const [pathDescription, setPathDescription] = useState<string[]>([]);

    const { mutate: findPath } = useFindPath();

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onSubmit",
        defaultValues: emptyPathRequest,
    });

    const startNode = (watch("startNode") || "").toUpperCase();
    const endNode = (watch("endNode") || "").toUpperCase();

    const getFilteredSuggestions = (input: string, exclude: string) => {
        const filteredNodes = validNodes.filter((node) => node !== exclude);

        if (input) {
            return filteredNodes.filter((node) =>
                node.toLowerCase().includes(input.toLowerCase()),
            );
        }

        return filteredNodes;
    };

    const onSubmit = (data: PathRequest) => {
        findPath(data, {
            onSuccess: (response) => {
                setPathDescription(response.path);
            },
            onError: () => {
                throw new Error("Failed to retrieve path data");
            },
        });
    };

    const handleNewSearch = () => {
        setPathDescription([]);
        reset();
    };

    return (
        <>
            <Navbar />
            <main className="flex flex-col flex-grow justify-center items-center mt-28">
                {pathDescription.length === 0 ? (
                    <HeroSection
                        startNode={startNode}
                        endNode={endNode}
                        onSubmit={handleSubmit(onSubmit)}
                        control={control}
                        errors={errors}
                        getFilteredSuggestions={(input, exclude) =>
                            getFilteredSuggestions(input, exclude)
                        }
                    />
                ) : (
                    <PathDescription
                        startNode={startNode}
                        endNode={endNode}
                        pathDescription={pathDescription}
                        onNewSearch={handleNewSearch}
                    />
                )}
            </main>
        </>
    );
}
