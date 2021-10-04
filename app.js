import { command as _command, parse } from 'yargs';
import { addNote, removeNote, listNotes, readNote } from './notes.js';

_command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        addNote(argv.title, argv.body);		
    }
})

_command({
    command : 'remove',
    describe: "Removing a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        removeNote(argv.title);		
    }
})

_command({
    command : 'list',
    describe: "Listing a Note",
    handler: function(argv){
        listNotes();		
    }
})

_command({
    command : 'read',
    describe: "Reading a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        readNote(argv.title);		
    }
})


parse();