// Find the next perfect square! (7Kyu)

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

public class NumberFun {
  public static long findNextSquare(long sq) {
      if(Math.sqrt(sq) % 1 == 0){
        return (long)(Math.sqrt(sq) + 1) * (long)(Math.sqrt(sq) + 1);
      }
      return -1;
  }
}
