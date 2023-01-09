function HextoBinary(Hexa){
    let result = "";
    const length = Hexa.toString().length;
    if(Hexa == 0){
        result = "0";
    }
    else{
        for(let i = 0; i < length; i++){
            if(Hexa.toString().charAt(i) == 'f' || Hexa.toString().charAt(i) == 'F'){
                result += "1111";
            }
            else if(Hexa.toString().charAt(i) == 'e' || Hexa.toString().charAt(i) == 'E'){
                result += "1110";
            }
            else if(Hexa.toString().charAt(i) == 'd' || Hexa.toString().charAt(i) == 'D'){
                result += "1101";
            }
            else if(Hexa.toString().charAt(i) == 'c' || Hexa.toString().charAt(i) == 'C'){
                result += "1100";
            }
            else if(Hexa.toString().charAt(i) == 'b' || Hexa.toString().charAt(i) == 'B'){
                result += "1011";
            }
            else if(Hexa.toString().charAt(i) == 'a' || Hexa.toString().charAt(i) == 'A'){
                result += "1010";
            }
            else if(Hexa.toString().charAt(i) == '9'){
                result += "1001";
            }
            else if(Hexa.toString().charAt(i) == '8'){
                result += "1000";
            }
            else if(Hexa.toString().charAt(i) == '7'){
                result += "0111";
            }
            else if(Hexa.toString().charAt(i) == '6'){
                result += "0110";
            }
            else if(Hexa.toString().charAt(i) == '5'){
                result += "0101";
            }
            else if(Hexa.toString().charAt(i) == '4'){
                result += "0010";
            }
            else if(Hexa.toString().charAt(i) == '3'){
                result += "0011";
            }
            else if(Hexa.toString().charAt(i) == '2'){
                result += "0010";
            }
            else if(Hexa.toString().charAt(i) == '1'){
                result += "0001";
            }
            else if(Hexa.toString().charAt(i) == '0'){
                result += "0000";
            }
        }
    }
   return result;
}
    console.log("D0  -> ", HextoBinary('D0'));
    console.log("FFF -> ", HextoBinary('fff'));
    console.log("123 -> ", HextoBinary('a2b'));


// function hex2bin(hex){
//     return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
// }
// console.log("D0 -> ", hex2bin('D0'));