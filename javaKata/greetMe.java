// Greet Me (7Kyu)

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

public class GreetMe{
  public static String greet(String name){
    return "Hello " + name.substring(0,1).toUpperCase() + name.toLowerCase().substring(1) + "!";
  }
}
