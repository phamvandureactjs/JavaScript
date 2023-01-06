function toHex(decimal) {
    let result = "";
    let sodu = "";
    if (decimal == 0) {
        result = "0";
    }
    while (decimal > 0) {
        
        sodu = decimal % 16;
        if(sodu < 10){
            result += sodu;
        }
        else if(sodu == 10){
            result += "A";
        }
        else if(sodu == 11){
            result += "B";
        }
        else if(sodu == 12){
            result += "C";
        }
        else if(sodu == 13){
            result += "D";
        }
        else if(sodu == 14){
            result += "E";
        }
        else if(sodu == 15){
            result += "F";
        }
        decimal = Math.floor(decimal/16);
    };
    return result.split("").reverse().join("");
}
    console.log("0 ➞", toHex(0))
    console.log("1000 ➞", toHex(1000))
    console.log("70 ➞", toHex(70))