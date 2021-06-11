import { Component, OnInit } from '@angular/core';
import { notes } from "../../notes"

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    notesArr: notes[]
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
            }
        ]
    }

    ngOnInit(): void {
    }

}
