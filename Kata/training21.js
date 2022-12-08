// Training JS #21: Methods of String object--trim() and the string template(8kyu)


function fiveLine(s){
  //coding here...
  s = s.trim();
  var tmp = s;
  var res = [s];
  
  for (var i = 1; i < 5; i++) {
   	res.push(s += tmp);
  } 
  return res.join("\n");
}
