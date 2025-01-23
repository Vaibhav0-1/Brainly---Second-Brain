import express from 'express';
import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
import { UserModel } from './db';
const app = express();

const PORT = 3000;


app.post("/api/v1/signup", (req: any, res: any) => {
    //zod validation
    const username = req.body.username;
    const password = req.body.password;

    UserModel.create({
        username: usernam
    })
})

app.post("/api/v1/signin", (req: any, res: any) => {
    
})

app.post("/api/v1/content", (req: any, res: any) => {
    
})

app.get("/api/v1/content", (req: any, res: any) => {
    
})

app.delete("/api/v1/content", (req: any, res: any) => {
    
})

app.post("/api/v1/brain/share", (req: any, res: any) => {
    
})

app.get("/api/v1/brain/:shareLink", (req: any, res: any) => {
    
})
function then(arg0: () => void) {
    throw new Error('Function not implemented.');
}

