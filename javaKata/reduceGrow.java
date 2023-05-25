// Beginner - Reduce but Grow (8Kyu)

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

public class Kata{
  public static int grow(int[] x){
    int total = 1;
    for(int i = 0; i < x.length; i++){
      total *= x[i];
    }
    return total;
  }

}
