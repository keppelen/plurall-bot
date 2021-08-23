import { config, UpdateToken } from "../config/config";
import { Authenticate } from "../requests/athenticate";
import { stringAnswer } from "../tools/answer";
import Clean from "../tools/clear";
import fs from 'fs'
import util from 'util'
import { Timeout } from "../tools/timeout";


export async function Login(email:string,password:string) {
    Clean()
    if(config.Token) return true

    console.log("🔒 Authenticação 🔒\n\n")

    console.log('\n\n🔐 Autenticando...')
    const token = await Authenticate(email,password)

    if(token){
        await UpdateToken(token,email)
    }

    return token
}