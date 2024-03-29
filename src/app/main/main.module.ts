import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ImagesConteinerComponent } from './images-conteiner/images-conteiner.component';
import { GraficoHabilidadesComponent } from './grafico-habilidades/grafico-habilidades.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    MainComponent,
    ImagesConteinerComponent,
    GraficoHabilidadesComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule
    ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
