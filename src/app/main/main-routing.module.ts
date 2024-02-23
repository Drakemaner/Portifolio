import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";

const route : Routes =
  [
    {
      path: '',
      component: MainComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
