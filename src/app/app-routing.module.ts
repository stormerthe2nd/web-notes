import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './custom_components/about/about.component';
import { NotesComponent } from './custom_components/notes/notes.component';
import { Notes } from './notes';


const routes: Routes = [
  { path: "", component: NotesComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
