const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
        describe: 'Title of the new note',
        demand: true,
        alias: 't'
};

const bodyOptions = {
        describe: 'Body of the new note',
        demand: true,
        alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note of given title', {
        title: titleOptions
    })
    .command('remove', 'Remove a note of given title', {
        title: titleOptions
    })
    .help()
    .argv;
let command = argv._[0];

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
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);
    allNotes.forEach(note => {
        console.log(note);
    })

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