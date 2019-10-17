package Problem_Solving;

import java.util.Scanner;

public class ToFindNumberOfInstances {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter a string");
        String s = scan.nextLine();
        int iscount = 0;
        int thecount = 0;

        for (int i = 0; i < s.length() - 2; i++) {

            if ((i<s.length()-3)&&(s.substring(i, i + 4).equals("the "))) {
                thecount++;
            }
            else if((i==s.length()-3)&&(s.substring(i, i + 3).equals("the"))){
                thecount++;
                break;
            }
        }

        for (int i = 0; i < s.length() - 1; i++) {

            if ((i<s.length()-2)&&(s.substring(i, i + 3).equals("is "))) {
                thecount++;
            }
            else if((i==s.length()-2)&&(s.substring(i, i + 2).equals("is"))){
                iscount++;
                break;
            }
        }

        System.out.println("Occurence of 'is' : " + iscount + " " + "\nOccurence of 'the' : " + thecount);
    }
}
