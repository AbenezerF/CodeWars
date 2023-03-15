// Get the Middle Character (7Kyu)



class Kata {
  public static String getMiddle(String word) {
    int middleChar = (int)(word.length() - 1) / 2;
    return word.length() % 2 == 0 ? word.substring(middleChar, middleChar + 2) : word.substring(middleChar, middleChar + 1);
  }
}
