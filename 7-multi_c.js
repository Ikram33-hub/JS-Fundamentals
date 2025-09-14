const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (!args[0] || isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    let output = "";
    for (let i = 0; i < (x > 0 ? x : -x); i++) {
        output += "C is fun\n";
    }
    console.log(output.slice(0, -1)); // نحيد آخر \n
}
