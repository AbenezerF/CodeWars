// The highest profit wins! (7Kyu)

/*
Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

import java.util.Arrays;
import java.util.Collections;
class MinMax {
    public static int[] minMax(int[] arr) {
      int[] fin = new int[2];
      int min = arr[0];
      int max = arr[0];
      for(int i = 0; i < arr.length; i++){
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
      }
      fin[0] = min;
      fin[1] = max;
      return fin;
    }
}

// using in-built methods
import java.util.Arrays;

class MinMax {
    public static int[] minMax(int[] arr) {
        // Your awesome code here
         Arrays.sort(arr);
        return new int[]{arr[0],arr[arr.length-1]}
    }
}
