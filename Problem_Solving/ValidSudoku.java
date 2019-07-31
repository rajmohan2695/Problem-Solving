package Problem_Solving;

import java.util.HashMap;

public class ValidSudoku {
    public static void main(String[] args){
        char board[][]={{'4','.','.','.','5','.','.','1','.'},
                        {'.','4','.','3','.','.','.','.','.'},
                        {'.','.','.','.','.','3','.','.','1'},
                        {'8','.','.','.','.','.','.','2','.'},
                        {'.','.','2','.','7','.','.','.','.'},
                        {'.','1','5','.','.','.','.','.','.'},
                        {'.','.','.','.','.','2','.','.','.'},
                        {'.','2','.','9','.','.','.','.','.'},
                        {'.','.','8','.','.','.','.','.','9'}};
        System.out.println(isValidSudoku(board));
    }
    public static boolean isValidSudoku(char[][] board) {
        HashMap<Character,String> box = new HashMap();
        for(int i=0;i<board.length;i++){
            if(i%3==0){
                box.clear();
            }
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
                if(!box.containsKey(board[i][j]) || board[i][j] == '.'){
                    box.put(board[i][j],""+j%3+i);
                }
                else if(box.get(board[i][j]).chatAt(0)) == 'k' && i){
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