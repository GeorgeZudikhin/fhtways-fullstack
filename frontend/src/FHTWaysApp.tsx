import { useState } from "react";
import { useForm } from "react-hook-form";
import { PathRequest } from "./api/find-path/findPath.ts";
import { useFindPath } from "./api/find-path/useFindPath.ts";
import HeroSection from "./components/HeroSection.tsx";
import Navbar from "./components/Navbar.tsx";
import PathDescription from "./components/PathDescription.tsx";
import { validNodes } from "./types/validNodes.ts";

const emptyPathRequest: PathRequest = {
    startNode: "",
    endNode: "",
};

export default function FHTWaysApp() {
    const [pathDescription, setPathDescription] = useState("");

    const { mutate: findPath, isPending, isError, error } = useFindPath();

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
        setPathDescription("");
        reset();
    };

    return (
        <>
            <Navbar />
            {!pathDescription ? (
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
        </>
    );
}
