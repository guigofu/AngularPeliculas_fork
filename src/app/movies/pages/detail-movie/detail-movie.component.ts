import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  movie: Movie;

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    // los paràmetros de la ruta se pueden obtener de forma sìncrona o con observable;
    // const id = this.route.snapshot.paramMap.get('id')

    // map, transforma y lo vuelve a emitir
    // el flatMap, o mergeMap (en javascript)
    // la entrada es un valor, y la salida es un observable
    // explicación: se reciben valores, se emiten observables (varios)
    // el observador lo que mira es un único observable (lo serializa)
    this.route.paramMap.pipe(
      mergeMap(x => this.service.getSelected(x.get('id')))
    )
    .subscribe(x => this.movie, err => console.log(err));

  }

}
