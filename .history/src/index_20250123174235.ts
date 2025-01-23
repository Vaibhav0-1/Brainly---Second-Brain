import express from 'express';
import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
import { UserModel } from './db';

const app = express();
app.use(express.json());



app.post("/api/v1/signup", async(req: any, res: any) => {
    //zod validation, hashing the password
    const username = req.body.username;
    const password = req.body.password;

    try{
    await UserModel.create({
        username: username,
        password: password
    })

    res.json({
        message: "User created successfully"
    })
} catch(e){
    res.status(411).json({
        message: "User already exists"
    })
}
})

app.post("/api/v1/signin", (req: any, res: any) => {
     const username = req.body.username;
     
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

app.listen(3000);

