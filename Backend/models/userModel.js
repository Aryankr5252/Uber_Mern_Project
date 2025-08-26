import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[3, 'First name must be at least 3 characters'],
        },
        lastname: {
            type: String,
            minlength:[3, 'Last name must be at least 3 characters'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength:[5, 'Email must be at least 5 characters'],
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    }
})

userSchema.methods.generateAuthToken = ()=> {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}

userSchema.static.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('users', userSchema);

export default userModel;