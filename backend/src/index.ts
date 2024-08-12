import express, { Request, Response } from "express";
import spotifySearch from "./controllers/searchController";
import queryValidation from "./middlewares/queryValidationMiddleware";
import { config } from "dotenv";
import cors from "cors";
import spotifyDownload from "./controllers/downloadController";
import downloadValidation from "./middlewares/downloadValdidationMiddleware";

config();

const app = express();
const port = Number(process.env.PORT) || 8000;
const serveIp = process.env.SERVE_IP || "127.0.0.1"

app.use(cors());
app.use(express.json());

app.post('/api/spotify/search', queryValidation, spotifySearch)

app.post('/api/spotify/download', downloadValidation, spotifyDownload)

app.all('*', function (req, res) {
    res.status(404).json({
        message: "Not found"
    });
});

app.listen(port, serveIp, () => {
    console.log(`Server is running on ${serveIp}:${port}`)
})