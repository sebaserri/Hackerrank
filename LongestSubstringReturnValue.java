import java.util.HashMap;
import java.util.Map;

public class LongestSubstringReturnValue {

  public static String getUniqueCharacterSubstring(final String input) {
    final Map<Character, Integer> visited = new HashMap<>();
    String output = "";
    int start = 0;
    for (int end = 0; end < input.length(); end++) {
      final char currChar = input.charAt(end);
      if (visited.containsKey(currChar)) {
        start = Math.max(visited.get(currChar) + 1, start);
      }
      if (output.length() < end - start + 1) {
        output = input.substring(start, end + 1);
      }
      visited.put(currChar, end);
    }
    return output;
  }

  public static void main(final String[] args) {
    String value = getUniqueCharacterSubstring("abcabcbb");
    System.out.println(value);
  }
}