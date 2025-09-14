const args = process.argv.slice(2); // ناخدو فقط الـ arguments الفعلية

if (!args[0]) {  // إذا ما كاينش أول argument
    console.log("No argument");
} else {
    console.log(args[0]); // نطبع أول argument
}
