/**
 * Adds numbers from a comma-separated string.
 * 
 * @param {string} numbers - A string containing numbers separated by commas.
 * @returns {number} - The sum of the numbers, or 0 for an empty string.
 */
export function add(numbers: string): number {
    if (!numbers) return 0; // this will pass the first test case 
    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        const delimiter = numbers.slice(2, delimiterLineEnd);

        // Get the rest of the string after the newline
        numbers = numbers.slice(delimiterLineEnd + 1);
        
        // Split the numbers using the custom delimiter
        const numArray = numbers.split(delimiter).map(Number);
        
        // Use reduce to sum the numbers
        return numArray.reduce((sum, num) => sum + num, 0);
      }
      
      // Split by both comma and newline using a regular expression (default behavior)
      const numArray = numbers.split(/[,|\n]/).map(Number);
      
      // Use reduce to sum the numbers
      return numArray.reduce((sum, num) => sum + num, 0);
}