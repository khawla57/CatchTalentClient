import { Component, Input } from '@angular/core';
import { Candidat } from '../../models/candidat.model';

@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent {

  @Input() viewMode = false;

  @Input() currentCandidat: Candidat = {
    
    name : '',
    adresse : '' ,
    email : '',
  };


}
