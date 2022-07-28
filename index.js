/* write a program that uses console.log() to print all the numbers
 from 1 to 200, with two eceptions. for numbers divisible by 6, print 
 "Shams" instead of the number, and for numbers divisible by 8 (and 
 not 6), print "TIIDELAB" instead. When you have that working, modify
 your program to print "ShamsTIIDELAB" for numbers that are divisible
 by both 6 and 8 (and still print "Shams" or "TIIDELAB" for numbers
 divisible by only one of those). */


 function shamsTIIDELAB() {
    let i = 1;
    while (i <= 200) {
        if (i % 6 == 0 && i % 8 == 0) {
            console.log("ShamsTIIDELAB");
        } else if (i % 8 == 0) {
            console.log("TIIDELAB");
        } else if (i % 6 == 0) {
            console.log("Shams");
        } else {
            console.log(i);
        }
        i++
    }
 }

 shamsTIIDELAB();


 function chessBoard(width) {
    if (width % 2 === 0) {
        str1 = " #";
        str2 = "# ";
        result = "";
        let i = 1;
        while (i <= width) {
            if (i % 2 > 0) {
                result += str1.repeat(width / 2);
            } else {
                result += str2.repeat(width / 2);
            }
            i++;
        }

        console.log(result);
    } else {
        return "You have to choose an even width for the chess board!";
    }
 }

 chessBoard(8);