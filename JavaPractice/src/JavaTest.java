public class JavaTest {
    public void reverseAString(String s){
        int i=0;
        int j=s.length()-1;
        char[] rev = s.toCharArray();
        while (i<j){
            char temp=rev[i];
            rev[i]=rev[j];
            rev[j]=temp;
            i++;
            j--;
        }
        System.out.println(String.valueOf(rev));
    }

    public static void main(String[] args) {
        JavaTest javaTest = new JavaTest();
        javaTest.reverseAString("test");
    }
}
