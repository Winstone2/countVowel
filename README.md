# countVowel
To count the number of vowels in a given string, we can iterate through each character in the string and check if it is a vowel. We can consider both uppercase and lowercase vowels to handle case insensitivity. We'll use a set to store the vowel characters for efficient lookup.
Thought Process:

    The function countVowels takes a string str as input.
    We convert the input string to lowercase using the toLowerCase() method to handle case insensitivity. This allows us to treat both uppercase and lowercase vowels as the same.
    We define a set vowels that contains all lowercase vowel characters. We use a set for efficient lookup, as it has constant-time complexity for checking membership.
    We initialize a variable count to keep track of the vowel count.
    We iterate through each character of the string using a for...of loop.
    For each character, we check if it is a vowel by using the vowels.has(char) method, which returns true if the character is a vowel.
    If the character is a vowel, we increment the count.
    After iterating through the entire string, we return the final count, which represents the number of vowels in the input string.

Edge Cases to Consider:

    Empty String: If the input string is empty, there are no vowels, and the function should return 0.
    Non-Alphabetic Characters: The function should only count alphabetic characters as vowels. Any non-alphabetic characters (such as punctuation marks or numbers) should be ignored.
    In this example, the countVowels function correctly identifies three vowels (e, o, o) in the input string "Hello, World!" (ignoring case and non-alphabetic characters).
