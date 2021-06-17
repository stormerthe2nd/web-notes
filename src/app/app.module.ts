import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './custom_components/notes/notes.component';
import { SpecificNoteComponent } from './custom_components/specific-note/specific-note.component';
import { AddNoteComponent } from './custom_components/add-note/add-note.component';
import { FormsModule } from '@angular/forms';

// particulars
import * as Hammer from 'hammerjs';
import {
    HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG
}
    from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

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
        FormsModule,
        HammerModule
    ],
    providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig,
    },],
    bootstrap: [AppComponent]
})
export class AppModule { }
