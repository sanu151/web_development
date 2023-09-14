// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/newDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  console.log("Connected Successfully");
}

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = 'My name is ' + this.name;

  console.log(greeting);
};

const Kitten = mongoose.model('myCollection', kittySchema);

const myObj = new Kitten({ name: 'Supriyo Das' });
// console.log(myObj.name); // 'Supriyo Das'
// myObj.speak();

myObj.save();
myObj.speak();