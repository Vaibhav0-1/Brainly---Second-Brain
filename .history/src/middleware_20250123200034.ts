import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_PASSWORD = "12345";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, )
}