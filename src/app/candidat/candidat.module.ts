import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllcandidatsComponent } from './components/get-allcandidats/get-allcandidats.component';
import { FormsModule } from '@angular/forms';
import { CandidatDetailsComponent } from './components/candidat-details/candidat-details.component';




@NgModule({
  declarations: [
    GetAllcandidatsComponent,CandidatDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class CandidatModule { }


