import { ImdbMovies } from './../model/Movie';
import { apiEndpoints } from './../constants/api-endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getTop250Movies() {
    const url = apiEndpoints.top250Movies.getMovies;

    return this.http.get<ImdbMovies[]>(url);
  }
}
