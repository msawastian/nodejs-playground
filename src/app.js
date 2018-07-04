const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log(argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    console.log(note);
    if (note) {
        console.log('Note created', argv.title, argv.body);
    } else {
        console.log('Failed to create note')
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}