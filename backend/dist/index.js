"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchController_1 = __importDefault(require("./controllers/searchController"));
const queryValidationMiddleware_1 = __importDefault(require("./middlewares/queryValidationMiddleware"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const downloadController_1 = __importDefault(require("./controllers/downloadController"));
const downloadValdidationMiddleware_1 = __importDefault(require("./middlewares/downloadValdidationMiddleware"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8000;
const serveIp = process.env.SERVE_IP || "127.0.0.1";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/api/spotify/search', queryValidationMiddleware_1.default, searchController_1.default);
app.post('/api/spotify/download', downloadValdidationMiddleware_1.default, downloadController_1.default);
app.all('*', function (req, res) {
    res.status(404).json({
        message: "Not found"
    });
});
app.listen(port, serveIp, () => {
    console.log(`Server is running on ${serveIp}:${port}`);
});
