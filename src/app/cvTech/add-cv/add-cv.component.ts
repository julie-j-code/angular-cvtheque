import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from 'src/app/cvTech/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  // formulaire:NgForm;

  constructor(
    private cvService:CvService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire:NgForm){
  // addPersonne(formulaire:NgForm){
    // console.log(formulaire);
    // pour le lien de redirection après soummission
    this.cvService.addPersonne(formulaire.value);
    const link = ['cv'];
    this.router.navigate(link);
  }

}
