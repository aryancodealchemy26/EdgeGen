function getTestCase() {
    const cases = [
        "",                             // Empty
        "a",                            // Single char
        "aba",                          // Odd length palindrome
        "racecar",                      // Odd length
        "code",                         // Even length
        "   ",                          // Just spaces
        "A man a plan a canal Panama",  // Spaces and mixed case
        "!@#$%^&*()"                   // Special chars
    ];
    return cases[Math.floor(Math.random() * cases.length)];
}

console.log(getTestCase());