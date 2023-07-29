function countVowels(str) {
    // Convert the input string to lowercase to handle case insensitivity
    str = str.toLowerCase();

    // Define a set of vowel characters
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Initialize a variable to keep track of the vowel count
    let count = 0;

    // Iterate through each character in the string
    for (let char of str) {
        // Check if the character is a vowel and increment the count if it is
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}
const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);

console.log(vowelCount); // Output: 3 (e, o, o are the vowels in the string)
