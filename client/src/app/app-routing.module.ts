import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";
// import { HomeComponent } from "./home/home.component";

// const routes: Routes = [{ path: "", component: HomeComponent }];
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
