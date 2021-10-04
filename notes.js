import { readFileSync, writeFileSync } from 'fs';
import { green, red, blue } from 'chalk';

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('\nNew Note Added Successfully!!!\n');
    }
    else{
        console.log("\nNote Title already existed!!!\n");
    }
}

const removeNote = function(title){

    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(green.inverse('Note removed'));
        saveNotes(notesToKeep)
    }
    else{
        console.log(red.inverse('No note found'));
    }

}

const listNotes = function(){
    const notes = loadNotes()
    
    console.log(green.inverse(" <= Your Notes => "));

    notes.forEach((note) => {
        console.log("Title : " + red(note.title) + " Body : " + blue(note.body))
    });
}

const readNote = function(title){
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(green(note.title) + " : " + blue(note.body));
    }
    else{
        console.log(red.inverse("Note Not Found!"));
    }
}


const loadNotes = function() {
    try{
        const dataBuffer = readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
}

const saveNotes = function(notes)  {
	const dataJSON = JSON.stringify(notes);
	writeFileSync('notes.json', dataJSON);
}

export const addNote = addNote;
export const removeNote = removeNote;
export const listNotes = listNotes;
export const readNote = readNote;