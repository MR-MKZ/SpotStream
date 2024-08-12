import { useMutation } from "@tanstack/react-query";
import { searchSpotify } from "../interfaces/spotify";
import { SearchResult, UseSearchSpotifyReturn } from "../types/searchTypes";

const useSearchSpotify = (): UseSearchSpotifyReturn => {
    const { mutate, data, isPending, isSuccess, isError, error } = useMutation<SearchResult[], Error, string>({
        mutationFn: (query: string) => searchSpotify(query),
        mutationKey: ['searchResult'],
        onSuccess: (data) => data
    })

    return { searchSpotify: mutate, searchResult: data || [], searchIsPending: isPending, searchIsSuccess: isSuccess, searchIsError: isError, searchError: error }
}

export default useSearchSpotify;