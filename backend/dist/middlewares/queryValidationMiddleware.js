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
const searchQuerySchema_1 = __importDefault(require("../schemas/searchQuerySchema"));
const yup_1 = require("yup");
const queryValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            message: "Request body is required",
        });
    }
    try {
        yield searchQuerySchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (error) {
        if (error instanceof yup_1.ValidationError) {
            return res.status(400).json({
                message: error.errors[0],
            });
        }
        else {
            console.error("Unexpected error:", error);
            return res.status(500).json({
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
});
exports.default = queryValidation;
