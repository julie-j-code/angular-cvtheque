import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTheque/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTheque/delete-cv/delete-cv.component';

const routes: Routes = [
  {path:'', redirectTo : 'cv', pathMatch: 'full'},

  {path:'cv', component:CvComponent},
  {path:'cv/:id', component:DetailComponent},
  {path:'cv/delete/:id', component:DeleteCvComponent},
  {path:'cv/add', component:AddCvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
