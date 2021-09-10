import { Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
    email: string;
    createdAt: string;
    plan: string;
    contact: string;
}

export const userSchema:Schema = new Schema({ 
    email:{
        type: String,
        require: true,
        lowercase: true,
        select: false
    },
    plan: {
        type: String,
        required: true,
        default: 'trial'
    },
    contact: {
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

export const UserModel = model<IUser>('User', userSchema)