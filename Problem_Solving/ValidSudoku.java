/*
Leetcode 36. Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

Example 2:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false

Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/
package Problem_Solving;

import java.util.HashMap;

public class ValidSudoku {
    public static void main(String[] args) {

          char board[][] = {{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
                            {'6', '.', '7', '1', '9', '5', '.', '.', '.'},
                            {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
                            {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
                            {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
                            {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
                            {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
                            {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
                            {'.', '.', '.', '.', '8', '.', '.', '7', '9'}};

//        char board[][]={{'4','.','.','.','5','.','.','1','.'},
//                        {'.','4','.','3','.','.','.','.','.'},
//                        {'.','.','.','.','.','3','.','.','1'},
//                        {'8','.','.','.','.','.','.','2','.'},
//                        {'.','.','2','.','7','.','.','.','.'},
//                        {'.','1','5','.','.','.','.','.','.'},
//                        {'.','.','.','.','.','2','.','.','.'},
//                        {'.','2','.','9','.','.','.','.','.'},
//                        {'.','.','8','.','.','.','.','.','9'}};
        System.out.println(isValidSudoku(board));
    }

    public static boolean isValidSudoku(char[][] board) {
        HashMap<Character, Integer> box1 = new HashMap();
        HashMap<Character, Integer> box2 = new HashMap();
        HashMap<Character, Integer> box3 = new HashMap();
        for (int i = 0; i < board.length; i++) {
            if (i % 3 == 0) {
                box1.clear();
                box2.clear();
                box3.clear();
            }
            HashMap<Character, Integer> row = new HashMap();
            HashMap<Character, Integer> column = new HashMap();
            for (int j = 0; j < board[i].length; j++) {
                if (!row.containsKey(board[i][j]) || board[i][j] == '.') {
                    row.put(board[i][j], i);
                } else {
                    return false;
                }
                if (!column.containsKey(board[j][i]) || board[j][i] == '.') {
                    column.put(board[j][i], j);
                } else {
                    return false;
                }
                if (j < 3) {
                    if (!box1.containsKey(board[i][j]) || board[i][j] == '.') {
                        box1.put(board[i][j], i);
                    } else
                        return false;
                } else if (j >= 3 && j < 6) {
                    if (!box2.containsKey(board[i][j]) || board[i][j] == '.') {
                        box2.put(board[i][j], i);
                    } else
                        return false;
                } else {
                    if (!box3.containsKey(board[i][j]) || board[i][j] == '.') {
                        box3.put(board[i][j], i);
                    } else
                        return false;
                }
            }
        }
        return true;
    }
}