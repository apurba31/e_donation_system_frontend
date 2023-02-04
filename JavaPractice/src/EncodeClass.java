import java.math.BigDecimal;
import java.util.Base64;

public class EncodeClass {

    public String encode(String longUrl){
        String[] splitUrl = longUrl.split(".com");
        String urlEncode = Base64.getEncoder().encodeToString(splitUrl[1].getBytes());
        return splitUrl[0]+urlEncode;
    }

    public String decode(String longUrl){
        byte[] decodedBytes = Base64.getDecoder().decode(longUrl);
        String decodedString = new String(decodedBytes);
        return decodedString;
    }

    public int myatoIi(String s) {
        s.trim();
        int num=0;
        String res="";
        char sAr[]=s.toCharArray();
        for (int i = 0; i < sAr.length; i++) {
            if (sAr[i] == '-') {
                res += sAr[i];
            } else if (sAr[i] >= '0' && sAr[i] <= '9') {
                res += sAr[i];
            } else if (sAr[i] >= 'a' && sAr[i] <= 'z'
                    || sAr[i] >= 'A' && sAr[i] <= 'Z')
                continue;
        }
        num = Integer.valueOf(res);
        return num;
    }

    public double findMedian(int[] nums1, int[] nums2){
        int m = nums1.length;
        int n = nums2.length;
        int p=0;
        double median=0;
        int middle = (m+n)/2;
        int[] mergedAr = new int[m+n];
        for(int i=0; i<m+n; i++){
            if(nums1[i]<nums2[i]){
                mergedAr[i]=nums1[i];
            }
            mergedAr[i]=nums2[i];
        }
        if((m+n)%2==0){
            median = (mergedAr[middle]+mergedAr[middle+1])/2;
            return median;
        }
        median = mergedAr[middle];
        return median;
    }

    public static double squareRoot(int num)
    {
        //temporary variable
        double temp;
        double sqrtroot=num/2;
        do
        {
            temp=sqrtroot;
            sqrtroot=(temp+(num/temp))/2;
        }
        while((temp-sqrtroot)!= 0);
        return sqrtroot;
    }

    public static void main(String[] args) {
        String url = "https://leetcode.com/problems/design-tinyurl";
        String[] splitUrl = url.split(".com");
        System.out.println(splitUrl[1]);
        for(String s:splitUrl){
            System.out.println(s);
        }

        int a=64, b;
        int i;
        i = a << 2;
        b = (byte)(a << 2);
        System.out.println("Original value of a: " + a);
        System.out.println("i and b: " + i + " " + b);

        String s="42";
        String s1="  -42";
        String s3="words and 987";
        char[] ch = s3.toCharArray();
        for(int k=0; k<ch.length; k++){
            System.out.println(ch[k]);
        }
        EncodeClass encodeClass = new EncodeClass();
        encodeClass.myatoIi(s3);
        System.out.println(encodeClass.myatoIi(s1));
        int s4=encodeClass.myatoIi(s3);
        System.out.println(s4);

        int[] nums1 = {1,3};
        int[] nums2 = {2};
//        encodeClass.findMedian(nums1, nums2);
        System.out.println(squareRoot(100));
        double sqrtNum = squareRoot(6);
        System.out.println(sqrtNum*sqrtNum);
    }
}
