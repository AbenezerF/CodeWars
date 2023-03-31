// Count of positives / sum of negatives (8Kyu)

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/


public class Kata{
    public static int[] countPositivesSumNegatives(int[] input){
      int pos = 0;
      int neg = 0;
      int[] empty = {};
      if(input == null || input.length == 0) return empty;
      for(int i = 0; i < input.length; i++){
        if(input[i] < 0) neg += input[i];
        if(input[i] > 0) pos++;
      }
      int[] arr = {pos, neg};
      return arr;
    }
}
