import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class MovieService {

  selected: Movie = null;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    const url = environment.urlBase + '/movie/popular?api_key=' + this.apiKey + '&page=1&language=es';
    return this.http.get<Results<Movie>>(url)
      .pipe(
        map(x => x.results)
      );
  }

  private getMovie(id: string): Observable<Movie> {
    const url = environment.urlBase + '/movie/' + id + '?api_key=' + this.apiKey + '&language=es';
    return this.http.get<Movie>(url);
  }

  getSelected(id: string): Observable<Movie> {
    // convertir un valor normal a un observable...
    // si el seleccionado no es nulo, me emite el seleccionado,
    // si es nulo hace la petición http
    return this.selected ? of(this.selected) : this.getMovie(id);
  }
}

export class Results<T> {
  results: T[];
}

export class Movie {
  poster_path: string;
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
}
