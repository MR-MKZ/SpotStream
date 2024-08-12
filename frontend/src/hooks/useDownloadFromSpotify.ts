import { useMutation } from "@tanstack/react-query";
import { downloadFromSpotify } from "../interfaces/spotify";
import { DownloadResult, UseDownloadFromSpotifyReturn } from "../types/searchTypes";

const useDownloadFromSpotify = (): UseDownloadFromSpotifyReturn => {
    const { mutate, data, isPending, isSuccess, isError, error } = useMutation<DownloadResult, Error, string>({
        mutationFn: (url: string) => downloadFromSpotify(url),
        mutationKey: ['downloadResult'],
        onSuccess: (data) => data
    })

    const downloadResultEmpty: DownloadResult = {
        success: false,
        id: "",
        artists: "",
        title: "",
        album: "",
        cover: "",
        isrc: "",
        releaseDate: "",
        link: ""
    }

    return { downloadFromSpotify: mutate, downloadResult: data || downloadResultEmpty, downloadIsPending: isPending, downloadIsSuccess: isSuccess, downloadIsError: isError, downloadError: error }
}

export default useDownloadFromSpotify;