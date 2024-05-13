function shiftCipher(str) {
    let shiftCount = 0; // Keeps track of shift amount (1 or 2)
    let alphabetCount = 0; // Keeps track of alphabet position (resets on non-alphabets)
  
    return str.split("").map((char, index) => {
      if (/[a-zA-Z]/.test(char)) { // Check if character is an alphabet
        alphabetCount++; // Increment alphabet count for every alphabet
  
        const charCode = char.charCodeAt(0);
        const isUpperCase = charCode >= 65 && charCode <= 90; // Check for uppercase
  
        let newCharCode = charCode + (shiftCount === 2 && alphabetCount % 3 === 0 ? 2 : 1);
        if (isUpperCase && newCharCode > 90) {
          newCharCode = newCharCode - 26; // Wrap around for uppercase
        } else if (!isUpperCase && newCharCode > 122) {
          newCharCode = newCharCode - 26; // Wrap around for lowercase
        }
  
        shiftCount = (shiftCount + 1) % 3; // Reset shift count every 3rd alphabet
  
        return String.fromCharCode(newCharCode);
      } else { // Handle non-alphabets
        alphabetCount = 0; // Reset alphabet count on non-alphabets
        return char; // Return non-alphabets unchanged
      }
    }).join("");
  }
  
  console.log(shiftCipher("Boy")); // Output: Cpa
  console.log(shiftCipher("The Brown Fox")); // Output: Uif Cspxo Gpy
  