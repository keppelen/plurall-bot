import prompt from 'prompt-sync'

const getAnswer = prompt()

export function numberAnswer(question:string,min:number,max:number){
    let num:number = -1
    while(num < 0){
        const awnser = getAnswer(question);

        if(isNumber(awnser) && parseInt(awnser) >= min && parseInt(awnser) <= max)
            num = parseInt(awnser)
    }
    return num
}

function isNumber(n:any) {
    return !isNaN(parseInt(n)) && isFinite(n);
}