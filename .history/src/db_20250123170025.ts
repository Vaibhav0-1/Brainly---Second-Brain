import { Model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
})

const UserModel = new Model(Us)
