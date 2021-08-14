import { Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
    book: string;
    group: string;
    question: string;
    answer: string;
    createdAt: Date;
}

export const questionSchema:Schema = new Schema({
    book:{
        type: String,
        require: true,
        lowercase: true
    },
    group:{
        type: String,
        require: true,
        lowercase: true
    },
    question:{
        type: String,
        require: true,
        lowercase: true
    },
    answer:{
        type: String,
        require: true,
        lowercase: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

export const QuestionModel = model<IUser>('Question', questionSchema)