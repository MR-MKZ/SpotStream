import { Request, Response, NextFunction, RequestHandler } from "express";
import DownloadUrlSchema from "../schemas/downloadUrlSchema";
import { ValidationError } from "yup";

const downloadValidation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is required",
    });
  }

  try {
    await DownloadUrlSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error: any) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: error.errors[0],
      });
    } else {
      console.error("Unexpected error:", error);
      return res.status(500).json({
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  }
};

export default downloadValidation;