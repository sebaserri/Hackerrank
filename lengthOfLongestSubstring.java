import java.util.HashMap;
import java.util.Map;

public class lengthOfLongestSubstring {

    public static void main(final String[] args) {
        final String s = "abcabcbb";
        final Map<Character, Integer> map = new HashMap<>();
        int start = 0, result = 0;

        // abba
        for (int i = 0; i < s.length(); i++) {
            final char c = s.charAt(i);
            if (map.containsKey(c)) {
                if (map.get(c) >= start)
                    start = map.get(c) + 1;
            }
            result = Math.max(result, i - start + 1);
            map.put(c, i);
        }
        System.out.println(result);
    }
}