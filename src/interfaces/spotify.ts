import axios from "axios";

const apiUrl: string = `${import.meta.env.VITE_API_URL}`
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
export const searchSpotify = async (query: string): Promise<object> => {
    return await axios.get(`${apiUrl}&query=${query}`);
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
export const downloadFromSpotify = async (musicLink: string): Promise<object> => {
    return await axios.get(`${apiUrl}&link=${musicLink}`);
}