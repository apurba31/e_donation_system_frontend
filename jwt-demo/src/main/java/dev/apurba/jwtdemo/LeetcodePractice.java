package dev.apurba.jwtdemo;

import javax.accessibility.AccessibleExtendedComponent;

public class LeetcodePractice {
    public String longestCommonPrefix(String[] strs) {
        String prefix="";
        char a,b,c;
        for(int i=0; i<strs.length; i++){
            for(int j=i+1; j<strs.length-1; j++){
                for(int k=i+2; k<strs.length-2; k++){
                    a=strs[i].charAt(i);
                    b=strs[j].charAt(j);
                    c=strs[k].charAt(k);
                    if(a==b && b==c){
                        prefix+=strs[i].charAt(i);
                    }
                }
            }
        }
        return prefix;
    }

    public static void main(String[] args) {
        LeetcodePractice leetcodePractice = new LeetcodePractice();
        String[] strs = {"flower","flow","flight"};
        leetcodePractice.longestCommonPrefix(strs);
    }
}
