// Array plus array

/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

public class Sum {

  public static int arrayPlusArray(int[] arr1, int[] arr2) {
    int total = 0;
    for(int val: arr1){
      total += val;
    }
    for(int val: arr2){
      total += val;
    }
    return total;
  }

}
