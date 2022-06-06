import { Note } from './model/note.model';

export interface AppState {
    readonly Notes: Note[];
    readonly ToggleColor: string;
}