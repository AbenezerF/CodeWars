// Highest and Lowest (7Kyu)
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5")  // return "5 1"
highAndLow("1 2 -3 4 5") // return "5 -3"
highAndLow("1 9 3 4 -5") // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

import java.util.Arrays; 

public class Kata {
  public static String highAndLow(String numbers) {
    String sorted = "";
    String[] splitArray = numbers.split(" ");
    int[] arr = new int[splitArray.length];
    
    for(int i = 0; i < splitArray.length; i++){
      arr[i] = Integer.parseInt(splitArray[i]);
    }
    Arrays.sort(arr);
    
    sorted += String.valueOf(arr[splitArray.length - 1]);
    sorted += " " + String.valueOf(arr[0]);

    return sorted;
  }
}
