import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  formulaire:Form;

  constructor() { }

  ngOnInit(): void {
  }

  addPersonne(formulaire){
    console.log(formulaire);
  }

}
