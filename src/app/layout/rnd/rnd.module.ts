import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RndRoutingModule } from './rnd-routing.module';
import { RndComponent } from './rnd.component';


@NgModule({
  declarations: [
    RndComponent
  ],
  imports: [
    CommonModule,
    RndRoutingModule
  ]
})
export class RndModule { }
