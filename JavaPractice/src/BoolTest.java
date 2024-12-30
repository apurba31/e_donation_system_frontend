import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BoolTest {
    public void permuteAlgo(int[] nums, int n){
        int temp=0;
        if(n==1){
            for(int i=0; i<nums.length; i++){
                System.out.println(nums[i]);
            }
            System.out.println();
        }
        else{
            for(int i=0; i<nums.length; i++){
                permuteAlgo(nums, n-1);
                if(n%2 == 0){
                    temp = nums[i];
                    nums[i] = nums[i-1];
                    nums[i-1] = temp;
                } else {
                    temp = nums[0];
                    nums[0] = nums[i-1];
                    nums[i-1] = temp;
                }
            }
            permuteAlgo(nums, n-1);
        }
    }

    public List<List<Integer>> permutationsOfArray(int[] nums){
        List<List<Integer>> permutedList = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(permutedList, new ArrayList<>(), nums, 0);
        return permutedList;
    }

    public void backtrack(List<List<Integer>> list, List<Integer>tempList, int[] nums, int start){
        list.add(new ArrayList<>(tempList));
        for(int i=start; i<nums.length; i++) {
            tempList.add(nums[i]);
            backtrack(list, tempList, nums, i+1);
            tempList.remove(tempList.size()-1);
        }
    }
    public static void main(String[] args) {
        System.out.println(3^5);
        int[] nums = {5,2,4,3,1};
        int[] numses = {1,2,3};
        BoolTest boolTest = new BoolTest();
//        boolTest.permuteAlgo(nums, nums.length);
//        boolTest.permutationsOfArray(nums);
        System.out.println(boolTest.permutationsOfArray(nums));
        System.out.println(boolTest.permutationsOfArray(numses));
    }
}
