import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo : 'cv', pathMatch: 'full'},

  {path:'cv', children:[
    {path:'', component:CvComponent},
    {path:'delete/:id', component:DeleteCvComponent},
    {path:'add', component:AddCvComponent},
    {path:':id', component:DetailComponent}
  ]},

  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
