import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from './config';

declare global {
    namespace Express {
      interface Request {
        userId?: string | number;
      }
    }
  }

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD)
    if(decoded){
        
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "Unauthorized"
        })
    }
}

//override the types of the express request object