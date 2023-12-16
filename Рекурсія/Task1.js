function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        const reversedSubstring = reverseString(str.substring(0, str.length - 1));
        const lastChar = str.charAt(str.length - 1);
        console.log(reversedSubstring + lastChar);
        return reversedSubstring + lastChar;
    }
}


var inputString = "tiger";
console.log(reverseString(inputString));
