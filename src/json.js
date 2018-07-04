// let obj = {
//     name: 'Mat'
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(stringObj);
//
// let personString = '{"name":"Mat","age":"25"}';
//
// let personObj = JSON.parse(personString);
//
// console.log(personObj);


const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body once told me...'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note, note);