// Nickname Generator (7Kyu)


function nicknameGenerator(name){
  let arr = ['a','e','i','o','u']
  if(name.length <= 3){
    return "Error: Name too short"
  }else if(arr.includes(name[2])){
    return name.substring(0,4)
  }else if(!arr.includes(name[2])){
    return  name.substring(0,3)
  }
}
