import java.util.HashMap;
import java.util.Map;

/**
 * FindLongestSubarrayBySum
 */
public class FindLongestSubarrayBySum {

    public static void main(String[] args) {
        int[] a = new int[]{10,2,-2,-20,10};
        int total = -10;

        // create a `HashMap` to store all the array elements `sum` and their 
        // `indices`
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0,-1);

        // we have to keep track of the sum of the subArrays,so that is stored in 
        // this variable `sum` ie `sum` is the current sum
        int sum = 0;

        //starting index pointing to the first element of the array 
        int start = 0;

        // end is not pointing anything,so it is set to `-1`
        int end = -1;

        // Traverse through the entire array and calculate the current  
        // `sum`. After calculating the currentSum, we will subtract the currentSum 
        // with the  given `sum S` and check whether it is equal to 0. If, it is 
        // equal to `0` then that means we have found the subArray which will 
        //give sum S = -10
        for (int i = 0; i < a.length; i++) {
            
            sum += a[i];
            if (!map.containsKey(sum)) {
                map.put(sum,i);
            }


            if (map.containsKey(sum - total) && start < i - map.get(sum - total)) {
                start = i - map.get(sum - total);
                end = i;
            }
        }
        System.out.println(end - start + 1 + " " + end);    
    }
}