function is_Palindrome2(str){
    let fullLength = str.length;
    let leftPointer;
    let rightPointer
    if(fullLength % 2 ===0){
        leftPointer = fullLength/2 -1
        rightPointer = leftPointer + 1
    }else{
        leftPointer = parseInt(fullLength/2)-1
        rightPointer = leftPointer + 2
    }

    while(leftPointer>=0){
        let leftChar = str[leftPointer]
        let rightChar = str[rightPointer]
        if(leftChar !== rightChar){
            return false
        }
        leftPointer--
        rightPointer++
    }
    return true;
}

const myStr = 'abbaabba';
const result = is_Palindrome2(myStr)

console.log(result)
