import axios, { AxiosResponse } from "axios";
import { DownloadResponse, DownloadResult, SearchResponse, SearchResult } from "../types/searchTypes";

const apiUrl: string = import.meta.env.VITE_API_URL
/**
 * Searches for music on Spotify using the provided query.
 *
 * @param query - The search query to use.
 * @returns A promise that resolves to an object containing the search results.
 *
 * @example
 * const results = await searchSpotify('The Beatles');
 * console.log(results); // Output: { ... } (search results object)
 */
export const searchSpotify = async (query: string): Promise<SearchResult[]> => {
    const response: AxiosResponse<SearchResponse> = await axios.post<SearchResponse>(`${apiUrl}/search`, {
        query: query
    });

    return response.data.result
}

/**
 * Downloads a music file from Spotify.
 *
 * @param musicLink - The Spotify music link to download.
 * @returns A promise that resolves with the downloaded music file data.
 *
 * @example
 * const musicLink = 'https://open.spotify.com/track/4uLU6fGDu91AfkUoyQENal';
 * const musicData = await downloadFromSpotify(musicLink);
 * console.log(musicData);
 */
export const downloadFromSpotify = async (musicLink: string): Promise<DownloadResult> => {
    const response: AxiosResponse<DownloadResponse> = await axios.post<DownloadResponse>(`${apiUrl}/download`, {
        url: musicLink
    });

    return response.data.result
}