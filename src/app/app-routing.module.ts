import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MainModule} from "./main/main.module";
import {CursosModule} from "./cursos/cursos.module";

function returnMain(){
  return MainModule
}

function returnCursos(){
  return CursosModule
}

const route : Routes = [

    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: 'inicio',
      loadChildren: returnMain
    },
    {
      path: 'cursos',
      loadChildren: returnCursos
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
