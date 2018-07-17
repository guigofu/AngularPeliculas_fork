import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatModule } from './mat.module';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [RouterModule, MatModule, FlexModule, FormsModule],
  declarations: []
})
export class SharedModule { }
