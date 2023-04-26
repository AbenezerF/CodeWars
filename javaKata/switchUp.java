// Switch it Up! (8Kyu)

/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/

public class Kata{
  public static String switchItUp(int number){
    String val = "";
   switch(number){
    case 0:
      val = "Zero"
      break;
    case 1:
      val =  "One";
      break;
    case 2:
      val = "Two";
      break;
    case 3:
      val = "Three";
      break;
    case 4:
      val = "Four";
      break;
    case 5:
      val = "Five";
      break;
    case 6:
      val = "Six";
      break;
    case 7:
      val = "Seven";
      break;
    case 8:
      val = "Eight";
      break;
    case 9:
      val = "Nine";
      break;
  }
    return val;
  }
}
