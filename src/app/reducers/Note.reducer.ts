import { Note } from '../model/Note.model';
import * as NoteActions from '../actions/note.actions';

const initialNote: Note = {
    id: "0",
    title: 'This is initial',
    content: 'This is initial',
    customTag: ""
};

export function noteReducer(state: Note[] = [initialNote], action: NoteActions.Actions) {
    switch (action.type) {
        case NoteActions.ADD_NOTE: return [...state, action.payload];
        case NoteActions.REMOVE_NOTE: state.splice(action.payload, 1); return [...state, action.payload];
        default: return state;
    }
}