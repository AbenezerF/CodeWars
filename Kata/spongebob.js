// sPoNgEbOb MeMe (7Kyu)

/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

function spongeMeme(sentence) {
  let arr = sentence.split('');
  for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0) arr[i] = arr[i].toUpperCase();
    else arr[i] = arr[i].toLowerCase();
  }
  return arr.join('');
}
