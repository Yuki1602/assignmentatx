/**
 * Adds numbers from a comma-separated string.
 * 
 * @param {string} numbers - A string containing numbers separated by commas.
 * @returns {number} - The sum of the numbers, or 0 for an empty string.
 */
export function add(numbers: string): number {
  if (!numbers) return 0;  // Handle empty string case
  
  let delimiter = /,|\n/;
  
  // Check if a custom delimiter is defined
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.slice(2, delimiterEndIndex).replace(/[\[\]]/g, '')); // Extract delimiter and remove square brackets

    // Remove the custom delimiter line from the string
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  // Split the string by the determined delimiter and convert to numbers
  const numArray = numbers.split(delimiter).map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}
