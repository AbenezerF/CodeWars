// If you can't sleep, just count sheep!! (8Kyu)

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

class Kata {
  public static String countingSheep(int num) {
    String str = "";
    for(int i = 1; i <= num; i++){
      str += String.valueOf(i) + " sheep...";
    }
    return num == 0 ? "" : str
  }
}
