import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Notes } from 'src/app/notes';

@Component({
    selector: 'app-add-note',
    templateUrl: './add-note.component.html',
    styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

    title: string
    text: string
    @Output() createNoteEmitter: EventEmitter<Notes> = new EventEmitter()
    constructor() { }

    ngOnInit(): void {
    }

    createNote(): void {
        const newNote: Notes = {
            sno: Math.random(),
            title: this.title,
            text: this.text,
            active: true
        }
        this.createNoteEmitter.emit(newNote)
    }
}
function output() {
    throw new Error('Function not implemented.');
}

