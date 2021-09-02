import { Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
    email: string;
    createdAt: string;
}

export const userSchema:Schema = new Schema({ 
    email:{
        type: String,
        require: true,
        lowercase: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

export const UserModel = model<IUser>('User', userSchema)