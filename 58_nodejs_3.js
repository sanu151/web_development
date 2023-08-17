// Synchronous function
// --> line by line Execution

// Asynchronous function
// --> line by line Execution not garrented

const fs = require("fs");
fs.readFile("57_testText.txt", "utf-8", (err, data)=>{
    console.log(data); // After read function complete read entire data, then the call function run
});

console.log("This is in this message"); 