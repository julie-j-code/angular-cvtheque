import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { LoginComponent } from './login/login.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
CvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ListeCvComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    LoginComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
