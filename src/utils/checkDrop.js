export const checkDrop = (num) => {
    const numSplit = num.split('')
    if(numSplit.includes('-')){
        return true
    }
    return false
}