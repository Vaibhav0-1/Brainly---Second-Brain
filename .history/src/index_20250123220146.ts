import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, UserModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';

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

app.post("/api/v1/signin", async(req: any, res: any) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    }else{
        res.status(403).json({
            message: "Invalid username or password"
        })
    }

})

app.post("/api/v1/content", userMiddleware, async(req: any, res: any) => {
    const link =- req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        userId: req.userId,
        tags: []
    })

    return res.json({
        message: "Content Added"
    })

    
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

