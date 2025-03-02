import mongoose, { model, Schema } from "mongoose";

mongoose

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String, required: true},
})

export const UserModel = model("User", UserSchema)
