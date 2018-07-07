const fs = require('fs');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes.json');
        return JSON.parse(notesString)
    } catch (error) {
        return []
    }
};

const saveNotes = notes => {
    fs.writeFileSync('src/notes/notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let note = {
        title,
        body
    };

    let notes = fetchNotes();

    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note
    }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = title => {
    let notes = fetchNotes();
    let filteredNote = notes.filter(note => note.title === title);
    return filteredNote[0];
};

const removeNote = title => {
    let notes = fetchNotes();
    let notesToKeep = notes.filter(note => note.title !== title);
    saveNotes(notesToKeep);

    return notes.length !== notesToKeep.length;
};

const logNote = note => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};