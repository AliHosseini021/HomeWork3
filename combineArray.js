/////qestion 2

function combineArrays(){
    let tmp = []
    for(let i in arguments){
        tmp.push(...arguments[i])
    }
    return tmp.sort()
}