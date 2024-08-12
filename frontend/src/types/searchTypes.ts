import { UseMutateFunction } from "@tanstack/react-query";

export interface Artists {
    external_urls: object[];
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface SearchResult {
    artists: Artists[];
    duration: number;
    href: string;
    id: string;
    name: string;
    preview_url: string;
}

export interface SearchResponse {
    result: SearchResult[]
}

export interface UseSearchSpotifyReturn {
    searchSpotify: UseMutateFunction<SearchResult[], Error, string, unknown>;
    searchResult: SearchResult[];
    searchIsPending: boolean;
    searchIsSuccess: boolean;
    searchIsError: boolean;
    searchError: Error | null;
}