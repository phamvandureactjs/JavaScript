function minElement(array){
    //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
    let min =  array[0];
    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
    for (let i = 1; i < array.length; ++i) {
        if (min > array[i]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min = array[i];
        }
    }
    return min;
}
function maxElement(array){
    let max =  array[0];
    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
    for (let i = 1; i < array.length; ++i) {
        if (max < array[i]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            max = array[i];
        }
    }
    return max;
}
function check(a, b){
    let result;
    if((minElement(a) > minElement(b)) && (maxElement(a) < maxElement(b))){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}
    
    console.log("[1, 2, 3, 4], [0, 10] -> ", check([1, 2, 3, 4], [0, 10]));
    console.log("[3, 1], [6, 0] ->", check([3, 1], [6, 0]));
    console.log("[1, 2, 3], [2, 3] ->", check([1, 2, 3], [2, 3]));

