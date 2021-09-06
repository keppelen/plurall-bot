import { Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
    email: string;
    createdAt: string;
    vital: boolean;
}

export const userSchema:Schema = new Schema({ 
    email:{
        type: String,
        require: true,
        lowercase: true,
        select: false
    },
    vital: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

export const UserModel = model<IUser>('User', userSchema)