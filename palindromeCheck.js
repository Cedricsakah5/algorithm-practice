function compareStrings(str){
    let lastPosition=str.length-1
    let middle=lastPosition/2
    for(let i=0; i<middle;i++){
        let leftLetter=str[i]
        let rightLetter=str[lastPosition-i]
        if(leftLetter!==rightLetter){
            return false
    
        }
   }
    return true
}
let myString=("madame")
let result=compareStrings(myString)
console.log(result)




