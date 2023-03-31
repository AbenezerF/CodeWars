// Count of positives / sum of negatives (8Kyu)


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
