package Problem_Solving;

import java.util.HashMap;

public class ValidSudoku {
    public static void main(String[] args){
        
    }
    public static boolean isValidSudoku(char[][] board) {
        for(int i=0;i<board.length;i++){
            HashMap<Character,Integer> hm = new HashMap();
            HashMap<Character,Integer> hmn = new HashMap();
            for(int j=0;j<board[i].length;j++){
                if(!hm.containsKey(board[i][j]) || board[i][j] == '.'){
                    hm.put(board[i][j],i);
                }
                else{
                    return false;
                }
                if(!hmn.containsKey(board[j][i]) || board[j][i] == '.'){
                    hmn.put(board[j][i],j);
                }
                else{
                    return false;
                }

            }
        }



        return true;
    }
    }

    /*
    * class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i=0;i<board.length;i++){
            HashMap<Character,Integer> hm = new HashMap();
            HashMap<Character,Integer> hmn = new HashMap();
            for(int j=0;j<board[i].length;j++){
                if(!hm.containsKey(board[i][j]) || board[i][j] == '.'){
                    hm.put(board[i][j],i);
                    // System.out.println(board[i][j]);
                }
                else{
                    return false;
                }
                if(!hmn.containsKey(board[j][i]) || board[j][i] == '.'){
                    hmn.put(board[j][i],j);
                }
                else{
                    return false;
                }

            }

        }
        for(int k=0;k<9;k=k+3){
        HashMap<Character,Integer> hm = new HashMap();
        for(int i=0;i<k+3;i=i+3){
            for(int l=0;l<9;l=l+3){
            for(int j=0;j<l+3;j=j+3){
                if(!hm.containsKey(board[i][j]) || board[i][j] == '.'){
                    hm.put(board[i][j],i);
                    System.out.println(board[i][j]);
                }
                else{
                    return false;
                }
            }}

            k=k+3;
            if(k<9)
            {
                continue;
            }
            else{
                break;
            }
        }
        }
        return true;
    }
}*/