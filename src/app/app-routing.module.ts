import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllcandidatsComponent } from './candidat/components/get-allcandidats/get-allcandidats.component';
import { CandidatDetailsComponent } from './candidat/components/candidat-details/candidat-details.component';
import { AddCandidatComponent } from './candidat/components/add-candidat/add-candidat.component';


const routes: Routes = [  
{ path: '', redirectTo: 'candidats', pathMatch: 'full' },
{ path: 'candidats', component: GetAllcandidatsComponent },
{ path: 'candidats/:id', component: CandidatDetailsComponent },
{ path: 'add', component: AddCandidatComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
