import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GenrePrimaryComponent } from './components/genre-primary/genre-primary.component';
import { GenreSecondaryComponent } from './components/genre-secondary/genre-secondary.component';
import { TopChartsComponent } from './components/top-charts/top-charts.component';

const routes: Routes = [
  
  {
    path: '',
    component: GenrePrimaryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'genre-primary',
    component: GenrePrimaryComponent
  },
  {
    path: 'genre-secondary',
    component: GenreSecondaryComponent
  },
  {
    path: 'top-charts',
    component: TopChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, GenrePrimaryComponent, GenreSecondaryComponent, TopChartsComponent]
