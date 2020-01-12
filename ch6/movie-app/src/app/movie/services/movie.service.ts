import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    return of(movies);
  }
}
