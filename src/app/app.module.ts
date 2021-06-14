import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './custom_components/notes/notes.component';
import { SpecificNoteComponent } from './custom_components/specific-note/specific-note.component';
import { AddNoteComponent } from './custom_components/add-note/add-note.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        NotesComponent,
        SpecificNoteComponent,
        AddNoteComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
