const { execSync } = require('child_process');

try {
    console.log("--- Compiling Java ---");
    execSync('javac Solution.java');

    console.log("--- Generating Input ---");
    const input = execSync('node generator.js').toString();
    console.log(`Testing with input: "${input.trim()}"`);

    console.log("--- Running Solution ---");
    // Passing the input to the Java process
    const output = execSync('java Solution', { input: input }).toString();
    
    console.log("Result:", output);
    console.log("✅ Status: Success");

} catch (error) {
    console.error("❌ Status: CRASHED/FAILED");
    console.error(error.stderr?.toString() || error.message);
}