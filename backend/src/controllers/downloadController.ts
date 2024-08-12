import { Request, Response } from "express"
import axios from "axios";

const spotifyDownload = async (req: Request, res: Response): Promise<Response> => {
    const apiUrl = `${process.env.SPOTIFY_API_URL}?apikey=${process.env.SPOTIFY_API_KEY}`
    try {
        const dl = await axios.get(`${apiUrl}&action=dl&url=${req.body.url}`);

        return res.status(200).json({
            result: dl.data.result
        })
    } catch (error) {
        console.log("Axios error", error);
        return res.status(500).json({
            message: "Internal server error! please check server logs"
        })
    }
}

export default spotifyDownload;