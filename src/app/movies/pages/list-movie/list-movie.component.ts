import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/movie.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  data: Movie[];

  constructor(
    private service: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    service.getPopular()
      .subscribe(x => this.data = x, err => console.log(err));
  }

  ngOnInit() {
  }

  goToDetail(movie: Movie){
    this.service.selected = movie;
    this.router.navigate([movie.id], { relativeTo: this.route});
  }

}
