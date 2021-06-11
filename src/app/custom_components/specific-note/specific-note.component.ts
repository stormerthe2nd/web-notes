import { Component, Input, OnInit } from '@angular/core';
import { notes } from 'src/app/notes';

@Component({
    selector: 'app-specific-note',
    templateUrl: './specific-note.component.html',
    styleUrls: ['./specific-note.component.css']
})
export class SpecificNoteComponent implements OnInit {

    @Input() note: notes;
    constructor() { }

    ngOnInit(): void {
    }

}
