const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (!args[0] || isNaN(x) || x < 1) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
