import { Model, Schema } from "mongoose";

const UserModel = new Model({
    username: {type: String, required: true},
    pass: {type: String, unique: true},
})
