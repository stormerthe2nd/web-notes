import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './custom_components/notes/notes.component';
import { SpecificNoteComponent } from './custom_components/specific-note/specific-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SpecificNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
