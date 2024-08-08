//273.Interger to English Word 
//Hard level

// Convert a non-negative integer num to its English words representation.

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

//-----------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @param {number} num
 * @return {string}
 */


var numberToWords = function(num) {
  // Got two arrays which has number (Ones and Tens) in words
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  //check if number is zero
    if (num === 0) return "Zero";

  //getWord() helps in naming words in Thousands range example 123: One Hundred Twenty Three
    const getWords = (n) => {
        let words = "";
      //Check the thousands place
        if (n >= 100) {
            words += ones[Math.floor(n / 100)] + " Hundred ";
            n %= 100;
        }
      //Check for tens place, which aren't available in tens array
        if (n >= 20) {
            words += tens[Math.floor(n / 10)] + " ";
            n %= 10;
        }
      //Check For ones place
        if (n > 0) {
            words += ones[n] + " ";
        }
        return words.trim();
    };

    let strNumber = num.toString().padStart(12, '0'); //Start with a integer mask 000000000000 and pad the number in mask (For 123: 000000000123) 
    let billion = parseInt(strNumber.slice(0, 3)); // Consider numbers XXX000000000
    let million = parseInt(strNumber.slice(3, 6)); // Consider 000XXX000000
    let thousand = parseInt(strNumber.slice(6, 9)); // Consider 000000XXX000
    let remainder = parseInt(strNumber.slice(9)); // Consider 000000000XXX

    let result = "";
    if (billion > 0) result += getWords(billion) + " Billion ";
    if (million > 0) result += getWords(million) + " Million ";
    if (thousand > 0) result += getWords(thousand) + " Thousand ";
    if (remainder > 0) result += getWords(remainder);
    
    return result.trim();
};
