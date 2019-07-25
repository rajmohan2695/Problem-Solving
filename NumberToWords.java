import java.util.ArrayList;

public class NumberToWords {
    public static void main(String[] args) {
        String[] num={"","one","two","three","four","five","six","seven","eight","nine"};
        String[] tens={"","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"};
        String[] twodigits={"","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"};
        String[] places={"hundred","thousand","lakhs","crore"};

//        String[][] places={{"","one","two","three","four","five","six","seven","eight","nine"},
//                {"","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"},
//                {"","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"},
//                {"hundred","thousand","lakhs","crore"}};


        int number = 123643;
        int[] digit=new int[8];
        int a=-1;
        while(number!=0){
            a++;
            digit[a] = number%10;
            number=number/10;
        }
        for (int i=0;i<=a;i++) {
            System.out.println(num[digit[i]]);
        }


    }
}
