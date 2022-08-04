

function outed(meet, boss){
    let sum=0;
    let count=0;
    for (var key in meet)
      if (key!=boss)
      {
        sum+=meet[key];
        count++;
      }  
      else
      {
        sum+=meet[key]*2;
        count++;
      }
    return sum/count<=5?'Get Out Now!':'Nice Work Champ!';
  }
