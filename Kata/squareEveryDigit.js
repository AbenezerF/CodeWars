/* Square Every Digit (7 kyu)

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/




function squareDigits(num){
    num = num.toString();
    let arr = num.split('');
    let newArr = arr.map(i => Number(i))
    let finalString = '';

    for(let i = 0; i < newArr.length;i++){
        finalString += (newArr[i] **=2).toString();
    }

    return Number(finalString);
  }