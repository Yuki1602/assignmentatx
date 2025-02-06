/**
 * Adds numbers from a comma-separated string.
 * 
 * @param {string} numbers - A string containing numbers separated by commas.
 * @returns {number} - The sum of the numbers, or 0 for an empty string.
 */
export function add(numbers: string): number {
  if (!numbers) return 0;  // Handle empty string case
  
  let delimiter = /,|\n/;  // Default delimiter (comma or newline)
  const negatives: number[] = [];  // To store negative numbers
  
  // Check if a custom delimiter is defined
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.slice(2, delimiterEndIndex).replace(/[\[\]]/g, '')); // Extract delimiter and remove square brackets

    // Remove the custom delimiter line from the string
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  // Split the string by the determined delimiter and convert to numbers
  const numArray = numbers.split(delimiter).map(numStr => {
    const num = Number(numStr);
    
    // Collect negative numbers
    if (num < 0) {
      negatives.push(num);
    }
    
    return num;
  });

  // If there are negative numbers, throw an exception
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }


  return numArray.reduce((sum, num) => sum + num, 0);
}
