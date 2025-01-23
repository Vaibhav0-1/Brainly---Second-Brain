import express from 'express';
import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
const app = express();


app.post("/api/v1/signup", (req, res))
