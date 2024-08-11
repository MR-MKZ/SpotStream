import { useMutation } from "@tanstack/react-query";
import { searchSpotify } from "../interfaces/spotify";

const useSearchSpotify = () => {
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: (query: string) => searchSpotify(query),
        mutationKey: ['searchResult'],
        onSuccess: (data) => data
    })

    return { searchSpotify: mutate, searchIsPending: isPending, searchIsSuccess: isSuccess, searchIsError: isError, searchError: error }
}

export default useSearchSpotify;