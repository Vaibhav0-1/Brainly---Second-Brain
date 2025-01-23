import { Model, Schema } from "mongoose";

const UserModel = new Model({
    username: {type: String, required: true},
    password: {type: String, required: true},
})
