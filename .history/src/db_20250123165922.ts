import { Model, Schema } from "mongoose";

const UserModel = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
})

const UserSchema = new Schema({

})
