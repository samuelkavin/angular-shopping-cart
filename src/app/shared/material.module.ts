import { NgModule } from '@angular/core';
import { MatInputModule, MatIconModule, MatButtonModule, MatBadgeModule, MatCardModule, MatTableModule, 
        MatChipsModule, MatStepperModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    MatStepperModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    MatStepperModule,
    MatListModule
  ]
})
export class MaterialModule { }
