import { Model, Schema } from "mongoose";

const UserModel = new Model({
    username: {type: String, required: true},
    email: {type: String, unique: true},
})
