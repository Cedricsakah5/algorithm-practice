// creat an empty array
// push all the elements in the array(stack)
// loop through the array and compare with the stack
//if any dismatch then its not a stack 
function compareString2(str){
    let stack=[]
    for(let i=0;i<str.length;i++){
        let value1=str[i]
        stack.push(value1)
    
    }
  
    for(let i=0; i<str.length; i++){
        let value3=str[i]
         let stackTop=stack.pop()
        if(value3!==stackTop){
           return false
        }
        
    }
return true
}
let myString=("madam")
let result=compareString2(myString)
console.log(result)