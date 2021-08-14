import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)


export function setupDatabase(){
    mongoose.connect(`${process.env.MONGO_CONNECT_LINK}`,{ useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao database!')
    })
    .catch(() => {
        console.log('Erro ao connectar ao databse')
    })
} 

