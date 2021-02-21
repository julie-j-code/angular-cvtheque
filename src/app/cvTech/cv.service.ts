import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [
      new Personne(1, "Adkins", "Julia", 38, "rotating_card_profile.png", 7777, "WebDesigner", " Phasellus at lorem a magna luctus volutpat. Morbi a dolor nunc. Ut non dictum turpis. Donec ac mollis ante, sit amet tempus arcu. Suspendisse eu pulvinar orci. "),
      new Personne(2, "Delvot", "Christophe", 42, "rotating_card_profile2.png", 888, "Teacher", "Aliquam nec turpis vitae libero molestie fringilla. Etiam aliquet convallis elit, nec molestie tellus rhoncus nec. Nulla nisl risus, aliquet ut ante eu, pulvinar imperdiet diam."),
      new Personne(3, "Dupeyret", "Franck", 33, "rotating_card_profile3.png", 7777, "Product Owner", " Phasellus at lorem a magna luctus volutpat. Morbi a dolor nunc. Ut non dictum turpis. Donec ac mollis ante, sit amet tempus arcu. Suspendisse eu pulvinar orci. ")
    ];
  }

  getPersonnes() {
    return this.personnes;
  }

  getPersonneById(id:number):Personne{
    const personne = this.personnes.find(personne=>{
      return personne.id==id;
    });
    return personne;

  }
}
