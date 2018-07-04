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
        console.log('Note created');
        notes.logNote(note)
    } else {
        console.log('Failed to create note')
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found.');
        notes.logNote(note)
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ?
        "Note was removed." :
        "Note wasn't removed";

    console.log(message);
} else {
    console.log('Command not recognized');
}