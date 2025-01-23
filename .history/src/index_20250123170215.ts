import express from 'express';
import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
const app = express();

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



app.post("/api/v1/signup", (req: any, res: any) => {
    const username = req.body.username;
    const password =
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

