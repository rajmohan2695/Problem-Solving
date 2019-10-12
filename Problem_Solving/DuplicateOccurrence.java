package Problem_Solving;

import java.util.Arrays;
import java.util.Scanner;

public class DuplicateOccurrence {
    public static void main(String[] args) {

        String name;
        Scanner user = new Scanner(System.in);
        name=user.nextLine();
        char index[]=name.toCharArray();
        Arrays.sort(index);
        char temp = index[0];
        int count = 1;
        for(int i=1;i<index.length;i++) {
            if(temp == index[i]) {
                count++;
            }
            else {
                System.out.println(temp+" Occurs "+count+" times");
                if(i==index.length-1)
                    break;
                else {
                    temp=index[i];
                    count=1;
                }
            }
        }
        System.out.println(temp+" Occurs "+count+" times");

//        Scanner scan = new Scanner(System.in);
//        char word[] = scan.next().toCharArray();
//        char record[] = String name;
//Scanner user = new Scanner(System.in);
//name=user.nextLine();
//char index[]=name.toCharArray();
//Arrays.sort(index);
//char temp = index[0];
//int count = 1;
//for(int i=1;i<index.length;i++) {
//if(temp == index[i]) {
//count++;
//}
//else {
//System.out.println(temp+" Occurs "+count+" times");
//if(i==index.length-1)
//break;
//else {
//temp=index[i];
//count=1;
//}
//}
//}
//System.out.println(temp+" Occurs "+count+" times");
//}
//
//}new char[word.length + 1];
//        int k = 0;
//        int count = 0;
//        occured:
//        for (int i = 0; i < word.length; i++) {
//            System.out.println(i);
//            for (char a : record) {
//                if (a == word[i])
//                    continue occured;
//                else {
//                    record[k++] = word[i];
//                    count = 1;
//                    for (int j = i + 1; j < word.length; j++) {
//                        if (word[i] == record[j]) {
//                            count++;
//                        }
//                    }
//
//                }
//            }
//            System.out.println(word[i] + " occurs " + count + " times");
//        }
    }
}
