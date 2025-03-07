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
  
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterPart = numbers.slice(2, delimiterEndIndex);

    // Handle delimiters enclosed in brackets (single or multiple)
    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
      // Split into individual delimiters (e.g., "[*][%]" → ["*", "%"])
      const delimiters = delimiterPart
        .slice(1, -1) // Remove outer brackets
        .split("]["); // Split into individual delimiters

      // Escape each delimiter and join with | for regex
      const escapedDelimiters = delimiters.map((d) => escapeRegExp(d));
      delimiter = new RegExp(escapedDelimiters.join("|"));
    } else {
      // Handle single-character delimiter without brackets (e.g., "//;")
      delimiter = new RegExp(escapeRegExp(delimiterPart));
    }

    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  // Split the string by the determined delimiter and convert to numbers
  const numArray = numbers.split(delimiter).map(numStr => {
    const num = parseInt(numStr, 10);
    if (num < 0) negatives.push(num);
    return num;
  });

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}

// Helper function to escape regex special characters
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
