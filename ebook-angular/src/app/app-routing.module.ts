import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { Error404Component } from './error404/error404.component';
import { IndexmainComponent } from './indexmain/indexmain.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'main',
  component:IndexmainComponent},


  {path:'',
  component:IndexmainComponent},

  {path:'book',
  component:BooksComponent},


  {

    path:'contact',
    component:ContactComponent
  },
  
  {path:'**',
  component:Error404Component}
,




]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
