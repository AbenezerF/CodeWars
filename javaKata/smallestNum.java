// Find the smallest integer in the array 

/*

*/


import java.util.Arrays;
public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
      Arrays.sort(args);
      return args[0];
    }
}
