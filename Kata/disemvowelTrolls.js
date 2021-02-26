/*  Disemvowel Trolls (7 kyu)
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */
function disemvowel(str) {
    let arr = str.split('');
    let final = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'i' && arr[i] !== 'o' && arr[i] !== 'u' && arr[i] !== 'O'  && arr[i] !== 'I'){
        final.push(arr[i])
      }
    }
    final = final.join('');
    return final;
  }

  // using regex 
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi,'');
  }