import { MoviesJson } from './../../mock/movies';
import { ImdbMovies, Moveis } from './../../model/Movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topMovies: ImdbMovies[] = [];
  movies: Moveis[] = [];
  imdb: boolean = true;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTop250Movies();
  }

  getTop250Movies() {
    this.moviesService.getTop250Movies().subscribe((res: any): void => {
      if (res.errorMessage == null) {
        const topResults = res.items.slice(0, 25);

        this.topMovies = Object.assign([], topResults);
        this.imdb = true;
      } else {
        this.imdb = false;
        this.movies = Object.assign([], MoviesJson);
      }
    });
  }
}
