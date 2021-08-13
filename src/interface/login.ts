import { config } from "../config/config";
import { Authenticate } from "../requests/athenticate";
import { stringAnswer } from "../tools/answer";
import Clean from "../tools/clear";


export async function Login() {
    Clean()
    if(config.Token) return

    console.log("🔒 Authenticação 🔒\n\n")
    
    const email = stringAnswer('✉️ Digite seu email: ')
    const pass = stringAnswer('🔑 Digite sua senha: ')

    console.log('\n\n🔐 Autenticando...')
    const token = await Authenticate(email,pass)
    return token
}