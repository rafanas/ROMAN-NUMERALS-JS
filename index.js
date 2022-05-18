//Get Roman version of number

function convertToRoman(num) {

    var current = []

    function translateSingles(x) {
        switch (x) {
            case 0:
                current.push("")
                break;
            case 1:
                current.push("I")
                break;
            case 2:
                current.push("II")
                break;
            case 3:
                current.push("III")
                break;
            case 4:
                current.push("IV")
                break;
            case 5:
                current.push("V")
                break;
            case 6:
                current.push("VI")
                break;
            case 7:
                current.push("VII")
                break;
            case 8:
                current.push("VIII")
                break;
            case 9:
                current.push("IX")
                break;
            case 10:
                current.push("X")
                break;
        }
    }
    
    function translateTens(x) {
        switch (x) {
            case "10":
                current.push("X")
            case "1":
                current.push("X")
                break;
            case "2":
                current.push("XX")
                break;
            case "3":
                current.push("XXX")
                break;
            case "4":
                current.push("XL")
                break;
            case "5":
                current.push("L")
                break;
            case "6":
                current.push("LX")
                break;
            case "7":
                current.push("LXX")
                break;
            case "8":
                current.push("LXXX")
                break;
            case "9":
                current.push("XC")
                break;
        }
    }
    
    function translateHundreds(x) {
        switch (x) {
            case "1":
                current.push("C")
                break;
            case "2":
                current.push("CC")
                break;
            case "3":
                current.push("CCC")
                break;
            case "4":
                current.push("CD")
                break;
            case "5":
                current.push("D")
                break;
            case "6":
                current.push("DC")
                break;
            case "7":
                current.push("DCC")
                break;
            case "8":
                current.push("DCCC")
                break;
            case "9":
                current.push("CM")
                break;
        }
    }
    
    function translateThousands(x) {
        switch (x) {
            case "1":
                current.push("M")
                break;
            case "2":
                current.push("MM")
                break;
            case "3":
                current.push("MMM")
                break;
            case "4":
                current.push("MMMM")
                break;
            case "5":
                current.push("V̅")
                break;
        }
    }

    let array = Array.from(String(num))

        if (num <= 10) {
            translateSingles(num);
            return(String(current))
        } 
        
        else if (num > 10 && num < 100) {
            translateTens(array[0])
            translateSingles(Number(array[1]))
            return current.join("")
         
        } 
        
        else if (num >= 100 && num < 1000) {
            translateHundreds(array[0])
            translateTens(array[1])
            translateSingles(Number(array[2]))
            return current.join("")
        } 
        
        else if (num >= 1000 && num < 5000){
            translateThousands(array[0])
            translateHundreds(array[1])
            translateTens(array[2])
            translateSingles(Number(array[3]))
            return current.join("")
        }

    }

    convertToRoman(500)