
export function Timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}