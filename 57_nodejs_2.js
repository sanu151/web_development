const fs = require("fs");
let text = fs.readFileSync("57_testText.txt", "utf-8");
console.log(text);

text = text.replace("Supriyo", "Rupa");
console.log("Creating a new file....");
fs.writeFileSync("57_rupa.txt", text);
console.log(text);