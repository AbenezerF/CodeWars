// Initialize my name (7kyu)
/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name){
  let str = '';
  let arr = name.split(' ')
  if(arr.length <= 2) return arr.join(' ');
  for(let i = 0; i < arr.length; i++){
    if(i !== 0 && i !== arr.length - 1){
      str = str + arr[i].charAt(0) + '. '
    }else if(i === arr.length -1 ){
      str = str + arr[i]
    }else{
      str = str + arr[i] + ' '
    }
  }
  return str
}
