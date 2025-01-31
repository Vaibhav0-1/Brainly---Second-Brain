import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, UserModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';
import { LinkModel } from './db';
import { random } from './utils';

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
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added"
    })  
})

app.get("/api/v1/content", userMiddleware, async(req: any, res: any) => {
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async(req: any, res: any) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        userId: req.userId //user owns this content
    })
    res.json({
        message: "Content deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async(req: any, res: any) => {
    const share = req.body.share;
    if(share){
        LinkModel.create({
            hash: random(10),
            userId: req.userId,
        })
    }else{
        await LinkModel.deleteOne({
            userId: req.userId
        });
    }

    res.json({
        message: "updated sharable Link"
    })
})

app.get("/api/v1/brain/:shareLink", async(req: any, res: any) => {
    const hash = req.params.shareLink//thats how you get the url param like this
    const linkawait LinkModel.findOne({
        hash
    })
})

app.listen(3000);

