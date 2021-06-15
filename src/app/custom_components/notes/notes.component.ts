import { Component, OnInit } from '@angular/core';
import { Notes } from "../../notes"
declare var $: any

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    notesArr: Notes[]
    noteElArr: Array<any> = []
    activeNote: number = 0
    constructor() {
        this.notesArr = [
            {
                sno: 1,
                title: "Notes 1",
                text: "this is the text in my book 2",
                active: false
            },
            {
                sno: 2,
                title: "Notes 2",
                text: "this is the text in my book 5",
                active: false
            },
            {
                sno: 3,
                title: "Notes 3",
                text: "this is the text in my book 29",
                active: false
            },
            {
                sno: 4,
                title: "Notes 4",
                text: "this is the text in my book 234",
                active: false
            },
            {
                sno: 5,
                title: "Notes 5",
                text: "this is the text in my book 5435",
                active: false
            },
            {
                sno: 6,
                title: "Notes 6",
                text: "this is the text in my book 23092",
                active: false
            }
        ]
        this.notesArr[0].active = true
    }

    ngOnInit(): void {

    }

    listenDeleteEmitter(note: Notes) {
        var noteIndex = this.notesArr.indexOf(note)
        this.notesArr.splice(noteIndex, 1)
        this.activeNote--
        this.notesArr.length < 1 ? {} : this.next()
    }
    listenCreateEmitter(note: Notes) {
        this.notesArr.push(note)
    }

    previous() {
        if (this.activeNote != 0) this.activeNote--
        this.notesArr.forEach(el => el.active = false)
        this.notesArr[this.activeNote].active = true
    }
    next() {
        if (this.activeNote != this.notesArr.length - 1) this.activeNote++
        this.notesArr.forEach(el => el.active = false)
        this.notesArr[this.activeNote].active = true
    }
}
