import { NgModule } from '@angular/core';
// import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule
} from '@angular/material';

@NgModule({
    // estas declaraciones estarán disponibles en todos los módulos
    exports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatListModule
    ]
})
export class MatModule { }
