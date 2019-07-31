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
                if(!hm.containsKey(board[j][i]) || board[j][i] == '.'){
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