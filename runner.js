const { execSync } = require('child_process');

try {
    // 1. Compile both
    execSync('javac Solution.java Brute.java');

    // 2. Get the input from our generator
    const input = execSync('node generator.js').toString().trim();
    
    // 3. Get results from both programs
    const actual = execSync('java Solution', { input: input }).toString().trim();
    const expected = execSync('java Brute', { input: input }).toString().trim();

    console.log(`\nInput:    "${input}"`);
    
    // 4. THE COMPARISON
    if (actual === expected) {
        console.log(`✅ PASS: Both versions agree.`);
        console.log(`Result:   "${actual}"`);
    } else {
        console.log(`❌ FAIL: Logic Error Detected!`);
        console.log(`Expected: "${expected}"`);
        console.log(`Actual:   "${actual}"`);
    }

} catch (error) {
    console.error("❌ CRASH: The program encountered a runtime error.");
}