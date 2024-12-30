import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MergeIntervals {

    public int[][] merge(int[][] intervals){
        List<int[]> res = new ArrayList<>();
        if(intervals.length == 0 || intervals == null){
            return res.toArray((new int[0][]));
        }
        Arrays.sort(intervals, (a,b)-> a[0]-b[0]);
        int start = intervals[0][0];
        int end = intervals[0][1];

        for(int[] interval : intervals){
            if(interval[0] <= end){
                end = Math.max(end, interval[1]);
            } else{
                res.add(new int[]{start, end});
                start = interval[0];
                end = interval[1];
            }
        }
        res.add(new int[] {start, end});
        return res.toArray(new int[0][]);
    }

    public static void main(String[] args) {
        int [][] intervals = {{1,3},{2,6},{8,10},{15,18}};
//        int [][] intervalsThree = {{1,3,0},{2,6,1},{8,10,2},{15,18,3}};
//        Arrays.sort(intervalsThree, (a,b,c) -> a[0]-b[0]-c[0]);
//        for(int[] interval : intervalsThree){
//            System.out.println(intervalsThree);
//        }
        MergeIntervals mergeIntervals = new MergeIntervals();
        mergeIntervals.merge(intervals);
        int[][] mergedIntervals = mergeIntervals.merge(intervals);
        for(int[] i:mergedIntervals){
            System.out.println(i);
        }
    }
}
