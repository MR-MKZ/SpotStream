"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const spotifySearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = `${process.env.SPOTIFY_API_URL}?apikey=${process.env.SPOTIFY_API_KEY}`;
    try {
        const search = yield axios_1.default.get(`${apiUrl}&action=search&query=${req.body.query}`);
        return res.status(200).json({
            result: search.data.result
        });
    }
    catch (error) {
        console.log("Axios error", error);
        return res.status(500).json({
            message: "Internal server error! please check server logs"
        });
    }
});
exports.default = spotifySearch;
