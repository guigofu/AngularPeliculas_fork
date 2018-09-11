import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './pages/list-movie/list-movie.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../shared/shared.module';
import { MovieService } from './services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListMovieComponent, DetailMovieComponent, MoviesComponent],
  providers: [MovieService]
})
export class MoviesModule { }
