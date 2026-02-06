// generator.js
function generateTestCase() {
    const types = ['empty', 'single', 'normal', 'special', 'large'];
    const choice = types[Math.floor(Math.random() * types.length)];

    switch (choice) {
        case 'empty': return ""; 
        case 'single': return "a";
        case 'special': return "!@#$%^&*()_+ 12345";
        case 'large': return "a".repeat(1000);
        default: return "Hello World";
    }
}

console.log(generateTestCase());