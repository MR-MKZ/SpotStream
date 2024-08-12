import { Request, Response } from "express"
import axios from "axios";

const spotifySearch = async (req: Request, res: Response): Promise<Response> => {
    const apiUrl = `${process.env.SPOTIFY_API_URL}?apikey=${process.env.SPOTIFY_API_KEY}`
    try {
        const search = await axios.get(`${apiUrl}&action=search&query=${req.body.query}`);

        return res.status(200).json({
            result: search.data.result
        })
    } catch (error) {
        console.log("Axios error", error);
        return res.status(500).json({
            message: "Internal server error! please check server logs"
        })
    }
}

export default spotifySearch;