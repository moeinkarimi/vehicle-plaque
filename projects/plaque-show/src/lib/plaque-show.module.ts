import { NgModule } from '@angular/core';
import { PlaqueShowComponent } from './plaque-show.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PlaqueShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaqueShowComponent
  ]
})
export class PlaqueShowModule { }
