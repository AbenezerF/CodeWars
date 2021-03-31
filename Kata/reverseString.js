// Create function that reverses a string

function reverseStr(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'error not in correct format';
    }
    let finalStr = [];
    for(let i = str.length - 1; i = 0; i--){
        finalStr.push(str[i]);
    }
    // or you could do: str.split('') then str.reverse()
    return finalStr.join('')
}
