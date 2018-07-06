import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './pages/list-movie/list-movie.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListMovieComponent, DetailMovieComponent, MoviesComponent]
})
export class MoviesModule { }
