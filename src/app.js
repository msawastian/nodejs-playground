const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const user = os.userInfo();
let result = notes.add(1, 2);
console.log(result);


fs.appendFile('notes.txt', `Hello, ${user.username}. You are ${notes.age}!`, function (error) {
    if (error) {
        console.log(error);
    }
});