import java.util.Arrays;

public class MoveZeroes {
    
    public static void main(final String[] args) {
        final int[] zeroes = { 12, 0, 4, 0, 5, 9 };
        moveZeroes(zeroes);
        System.out.println(Arrays.toString(zeroes));
    }

    private static void moveZeroes(final int[] nums) {
        int pos = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != 0){
                nums[pos] = nums[i];
                pos++;
            }
        }
        
        for(;pos<nums.length; pos++){
            nums[pos] = 0;
        }
    }
}