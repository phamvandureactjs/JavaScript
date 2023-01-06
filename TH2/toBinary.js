function toBinary(decimal) {
    let result = "";
    if (decimal == 0) {
        result = "0";
}
    while (decimal > 0) {
        result += decimal % 2;
        decimal = Math.floor(decimal/2);
};
    return result.split("").reverse().join("");
}
    console.log("0 ➞", toBinary(0))
    console.log("100 ➞", toBinary(100))
    console.log("70 ➞", toBinary(70))