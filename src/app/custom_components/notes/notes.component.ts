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
  localNotes
  constructor() {
    this.localNotes = localStorage.getItem("notes")
    this.localNotes ? this.notesArr = JSON.parse(this.localNotes) : this.notesArr = []
    this.notesArr[0] ? function (notesArr: Notes[]) {
      notesArr.forEach(el => {
        el.sno = notesArr.indexOf(el)
        el.active = false
      })
      notesArr[0].active = true
      console.log(...notesArr)
    }(this.notesArr) : {}
  }

  ngOnInit(): void {
  }

  listenDeleteEmitter(note: Notes) {
    var noteIndex = this.notesArr.indexOf(note)
    this.notesArr.splice(noteIndex, 1)
    localStorage.setItem("notes", JSON.stringify(this.notesArr))
    this.activeNote--
    this.notesArr.length < 1 ? {} : this.next()
  }
  listenCreateEmitter(note: Notes) {

    this.notesArr.push(note)
    this.activeNote = this.notesArr.length
    localStorage.setItem("notes", JSON.stringify(this.notesArr))
    this.previous()
  }

  listenStarEmitter(note: Notes) {
    this.notesArr[this.notesArr.indexOf(note)].stared = note.stared
    localStorage.setItem("notes", JSON.stringify(this.notesArr))
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

  swiper() {
    $("app-specific-note").on("swipe", function () {
      this.next()
    })
  }
}
