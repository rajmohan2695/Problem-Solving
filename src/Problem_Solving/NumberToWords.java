package Problem_Solving;
import java.util.ArrayList;
public class NumberToWords {
    public static void MorethanThousand(int number) {

        String[] num = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        String[] tens = {"", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"};
        String[] twodigits = {"", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
        String[] hundred = {"", "hundred and"};
        String[] thousand = {"", "thousand"};
        String[] lakhs = {"", "lakhs"};
        String[] crore = {"", "crore"};

//        String[] num = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
//        String[] tens = {"", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"};
//        String[] twodigits = {"", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
//        String[] hundred = {"", "hundred and"};
//        String[] thousand = {"", "thousand"};
//        String[] lakhs = {"", "lakhs"};
//        String[] crore = {"", "crore"};

        String[][] places={{"","one","two","three","four","five","six","seven","eight","nine"},
                {"","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"},
                {"hundred","thousand","lakhs","crore"}};


        int[] digit = new int[8];
        int hold[] = {0, 0, 0, 0, 0, 0, 0, 0};
        int a = -1;
        while (number != 0) {
            a++;
            digit[a] = number % 10;
            hold[a] = 1;
            number = number / 10;
        }
        String result = "";
        int i = 0;
        if ((hold[1] == 1) && (digit[1] == 1)) {
            result = tens[digit[0]];
            i = 2;
        }
        System.out.println();
        for (; i <= a; i++) {
            //result=
        }
    }
    }
