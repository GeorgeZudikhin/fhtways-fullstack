import { AxiosResponse } from "axios";
import { api } from "../api";

export interface PathRequest {
    startNode: string;
    endNode: string;
}

export interface PathResponse {
    path: string;
}

export const findPath = async (data: PathRequest): Promise<PathResponse> => {
    const response: AxiosResponse<PathResponse> = await api.post<PathResponse>(
        "/find-path/",
        data
    );
    return response.data;
};
