function firstNonRepeatedChar(str) {
  // Handle empty or null input
  if (!str) return null;

  // Count frequency of each character
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find first character with count 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null; // if no non-repeating character
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
