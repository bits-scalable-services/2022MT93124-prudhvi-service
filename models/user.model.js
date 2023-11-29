import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userId: ObjectId,
    userName: String,
    userTitle: String,
    emailId: String,
    dateOfBirth: String,
    password: String
}, { timestamps: true });

export default mongoose.model('user', userSchema);