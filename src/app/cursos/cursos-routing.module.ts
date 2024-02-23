import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CursosComponent} from "./cursos/cursos.component";

const route : Routes = [
  {
    path: ':nomeCurso',
    component: CursosComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
