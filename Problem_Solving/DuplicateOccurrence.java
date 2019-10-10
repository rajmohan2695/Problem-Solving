package Problem_Solving;

import java.util.Scanner;

public class DuplicateOccurrence {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        char word[] = scan.next().toCharArray();
        char record[] = new char[word.length+1];
        int k=0;
        occured:
        for (int i = 0; i < word.length; i++) {
            System.out.println(i);
            for (char a : record) {
                if (a == word[i])
                    continue occured;
                else {
                    record[k++]=word[i];
                    int count = 1;
                    for (int j = i + 1; j < word.length; j++) {
                        if (word[i] == record[j]) {
                            count++;
                        }
                    }
                    System.out.println(word[i] + " occurs " + count + " times");
                }
            }
        }
    }
}
