import cfg from './cfg.json'
import fs from 'fs'
import util from 'util'
import { Timeout } from '../tools/timeout';


export let config = cfg


export async function UpdateToken(token:string, email:string){
    const writeFile = util.promisify(fs.writeFile);
    const newData = {
        ...config,
        Email: email,
        Token: token
    }
    await writeFile('./src/config/cfg.json', JSON.stringify(newData))
    config = {
        DelayMultiplier: config.DelayMultiplier,
        Email: email,
        Token: token
    }
    await Timeout(500)
}