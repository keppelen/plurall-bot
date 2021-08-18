import axios, { AxiosRequestConfig } from "axios"


export async function Authenticate(email:string,password:string){

    const config:AxiosRequestConfig = {
        headers: {
            'Host': 'sso.plurall.net',
            'Accept': '*/*',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Referer': 'http://login.plurall.net/',
            'content-type': 'application/json',
            'idApplication': 'NWVlY2NmNzJjOThhZmY0', // and this
            'Origin': 'https://login.plurall.net',
            'Content-Length': '263',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'TE': 'trailers',
        }
    }

    const body = {
        operationName: "loginCheckAccess",
        variables:{
           username: email,
           password: password
        },
        query:"mutation loginCheckAccess($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n  }\n}\n"
     }

    try{
        const response = await axios.post('https://sso.plurall.net/graphql',body,config)
        const token = response.data.data.login.token
        
        return token
    }catch{
        console.log('🅾️ Não foi possivel efetuar o login, digita certo saporra!')
        return null
    }

}