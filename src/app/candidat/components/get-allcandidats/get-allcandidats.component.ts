import { Component } from '@angular/core';
import { Candidat } from '../../models/candidat.model';
import { CandidatService } from '../../service/candidat.service';

@Component({
  selector: 'app-get-allcandidats',
  templateUrl: './get-allcandidats.component.html',
  styleUrls: ['./get-allcandidats.component.css']
})
export class GetAllcandidatsComponent {

  candidats? : Candidat[];
  currentCandidat : Candidat = {} ;
  currentIndex = -1 ;
  name = '' ;

  constructor(private candidatService : CandidatService){}

  ngOnInit() : void{
    this.retrieveCandidats();
  }

  retrieveCandidats() : void {
    this.candidatService.getAll()
    .subscribe({
      next: (data) => {
        this.candidats = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}
  refreshList(): void {
  this.retrieveCandidats();
  this.currentCandidat = {};
  this.currentIndex = -1;
}
   
setActiveCandidat(candidat: Candidat, index: number): void {
  this.currentCandidat = candidat;
  this.currentIndex = index;
}
removeAllCandidats(): void {
  this.candidatService.deleteAll()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
}

searchTitle(): void {
  this.currentCandidat = {};
  this.currentIndex = -1;

  this.candidatService.findByTitle(this.name)
    .subscribe({
      next: (data) => {
        this.candidats = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}

  }


