import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { findPath, PathRequest, PathResponse } from "./findPath";

export const useFindPath = (): UseMutationResult<
    PathResponse,
    Error,
    PathRequest
> => {
    return useMutation({
        mutationFn: findPath,
    });
};
