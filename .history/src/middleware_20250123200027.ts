import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const 

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, )
}