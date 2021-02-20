import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() personne : Personne;
  @Output() selectedPersonne = new EventEmitter();

  constructor() { }

  ngOnInit(){
  }

  selectPersonne(){
    //émettre un évènement et y injecter la personne
    this.selectedPersonne.emit(this.personne);

  }


  // private newMethod(): string | symbol {
  //   return this.personne;
  // }
}
