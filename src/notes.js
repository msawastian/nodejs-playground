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
    fs.writeFileSync('notes.json', JSON.stringify(notes));
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
    console.log('Getting all notes');
};

const getNote = title => {
    console.log(`Getting note: ${title}`)
};

const removeNote = title => {
    console.log(`Removing note: ${title}`)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};