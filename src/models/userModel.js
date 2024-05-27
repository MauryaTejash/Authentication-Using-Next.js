
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true,"Please provide an username"],
        unique: true
    },
    email: {
        type: String,
        require: [true,"Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true,"Please provide a password"]
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiary: Date,
    verifyToken: String,
    verifyTokenExpiary: Date
})


//creation of model
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;