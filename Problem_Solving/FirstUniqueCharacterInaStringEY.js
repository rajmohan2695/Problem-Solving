/*
    Leetcode : 387  First Unique Character in a String ( Easy )
    Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.
    Note: You may assume the string contain only lowercase letters.
*/

//  Method 1

function firstUniqueCharacter(str){

    if(!str || !str.length) { return -1 }

    let counter = new Map();

    for(let char of str){
        counter.get(char) ? counter.set(char,counter.get(char) + 1) : counter.set(char,1);
    }

    for(let index = 0; index < str.length; index++){
        if(counter.get(str[index]) == 1)
            return index;
    }
    return -1;
}

let s = "leetcode"

console.log(firstUniqueCharacter(s))    // 0

// Method 2

function firstUniqueCharacter(str){

    if( !str || !str.length ) { return -1; }

    for(let index = 0; index < str.length; index++){
        if(str.indexOf(str[index]) == str.lastIndexOf(str[index])){
            return index
        }
    }
    return -1;
}

let s = "leetcode"

console.log(firstUniqueCharacter(s))    // 0