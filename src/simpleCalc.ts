/**
 * Adds numbers from a comma-separated string.
 * 
 * @param {string} numbers - A string containing numbers separated by commas.
 * @returns {number} - The sum of the numbers, or 0 for an empty string.
 */
export function add(numbers: string): number {
    if (!numbers) return 0; // this will pass the first test case 
    const numArray = numbers.split(/,|\n/).map(Number); // added | to split by newline
    return numArray.reduce((sum, num) => sum + num, 0); // this will pass the rest of the test cases
}