// Abbreviate a Two Word Name (8Kyu)

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


*/

public class AbbreviateTwoWords {

  public static String abbrevName(String name) {
    String[] arr = name.split(" ");
    String first = arr[0].substring(0,1).toUpperCase();
    String second = arr[1].substring(0,1).toUpperCase();

    return first + "." + second;
  }
}
