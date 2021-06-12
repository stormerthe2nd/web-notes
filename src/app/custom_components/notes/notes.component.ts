import { Component, OnInit } from '@angular/core';
import { Notes } from "../../notes"

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    notesArr: Notes[]
    constructor() {
        this.notesArr = [
            {
                sno: 1,
                title: "Notes 1",
                text: "this is the text in my book",
                active: true
            },
            {
                sno: 2,
                title: "Notes 2",
                text: "this is the text in my book",
                active: true
            },
            {
                sno: 3,
                title: "Notes 3",
                text: "this is the text in my book",
                active: true
            },
            {
                sno: 4,
                title: "Notes 4",
                text: "this is the text in my book",
                active: true
            },
            {
                sno: 5,
                title: "Notes 5",
                text: "this is the text in my book",
                active: true
            },
            {
                sno: 6,
                title: "Notes 6",
                text: "this is the text in my book",
                active: true
            }
        ]
    }

    ngOnInit(): void {
    }

    listenDeleteEmitter(note: Notes) {
        var noteIndex = this.notesArr.indexOf(note)
        this.notesArr.splice(noteIndex, 1)
    }

}
