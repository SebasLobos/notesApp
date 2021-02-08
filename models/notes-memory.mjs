import { AbstractNotesStore , Note } from "./Notes.mjs";

const notes = [];

export class InMemoryNotesStore extends AbstractNotesStore {

    async close () { }

    async update (key, title, body){
        notes[key] = new Note( key, title, body);
        return notes[key];
    }

    async crete (key, title, body){
        notes[key] = new Note (key, title, body);
        return notes[key];
    }

    async read (key){
        if ( notes[key] ) {
            return notes[key];
        } else {
            throw Error( `Note ${key} does not exist`);
        }
    }

    async destroy (key){
        if ( notes[key] ){
            delete notes[key]
        }else{
            throw Error( `Note ${key} does not exist`);
        }
    }

    async keylist() {
        return Object.keys(notes);
    }

    async count() {
        return notes.length;
    }
}