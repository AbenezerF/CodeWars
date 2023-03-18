// Beginner Series #3 Sum of Numbers (8Kyu)

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

public class Sum{
     public int GetSum(int a, int b){
      int total = 0;
       if( a < b){
        for(int i = a; i <= b; i++){
          total += i;
      }
  }else{
    for(int i = b; i <= a; i++){
      total += i;
      }
     }
       return total;
   }
  }
  

// Another solution
  public class Sum
  {
    public int GetSum(int a, int b) {
      int res = 0;
      for (int i = Math.min(a, b); i <= Math.max(a, b); i++) {
        res += i;
      }
      return a == b ? a : res
    }
  }
  
