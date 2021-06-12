import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Notes } from 'src/app/notes';

@Component({
    selector: 'app-specific-note',
    templateUrl: './specific-note.component.html',
    styleUrls: ['./specific-note.component.css']
})
export class SpecificNoteComponent implements OnInit {

    @Input() note: Notes;
    constructor() { }
    @Output() deleteNoteEmitter: EventEmitter<Notes> = new EventEmitter();

    ngOnInit(): void {

    }

    deleteThisNote(note: Notes) {
        this.deleteNoteEmitter.emit(note)
    }
}
