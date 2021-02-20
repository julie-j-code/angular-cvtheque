import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne : Personne;

  constructor() { }

  ngOnInit() {
    // this.personnes = [
    //   new Personne(1, "Adkins", "Julia", 38, "rotating_card_profile.png", 7777, "WebDesigner", " Phasellus at lorem a magna luctus volutpat. Morbi a dolor nunc. Ut non dictum turpis. Donec ac mollis ante, sit amet tempus arcu. Suspendisse eu pulvinar orci. "),
    //   new Personne(2, "Delvot", "Christophe", 42, "rotating_card_profile2.png", 888, "Teacher", "Aliquam nec turpis vitae libero molestie fringilla. Etiam aliquet convallis elit, nec molestie tellus rhoncus nec. Nulla nisl risus, aliquet ut ante eu, pulvinar imperdiet diam."),
    //   new Personne(3, "Dupeyret", "Franck", 33, "rotating_card_profile3.png", 7777, "Product Owner", " Phasellus at lorem a magna luctus volutpat. Morbi a dolor nunc. Ut non dictum turpis. Donec ac mollis ante, sit amet tempus arcu. Suspendisse eu pulvinar orci. ")
    // ];
  }

  selectPersonne(personne){
    this.selectedPersonne=personne;

  }

}
