// Create function that reverses a string

function reverseStr(str){
    let strArr = str.split('');
    let finalStr = [];
    for(let i = strArr.length - 1; i >= 0; i--){
        finalStr.push(strArr[i]);
    }
    // or you could do: strArr.reverse()
    return finalStr.join('')
}