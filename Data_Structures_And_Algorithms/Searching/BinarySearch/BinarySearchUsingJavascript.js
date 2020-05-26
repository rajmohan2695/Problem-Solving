
// Defective
// Debugging this code
function binarySearch(left, right, toSearch, array){
    
    var middle = Math.floor(left + (right - left) / 2) ;
    if(array[middle] == toSearch){
        return middle;
    }

    if(middle == 0){
        return "Value not found"
    }

    if(middle > toSearch){
        return binarySearch(left, middle - 1, toSearch, array)
    }

    return binarySearch(middle + 1, right, toSearch, array)
}

var array = [1,2,3,4,5,6,7,8,34,122,123,234,3535];



function startSearch(toSearch, array){
    return binarySearch(0, array.length-1, toSearch, array)
}

console.log(startSearch(2, array))