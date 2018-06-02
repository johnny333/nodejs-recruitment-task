import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/index';
import { environment } from '../../../environments/environment';
import { IMovie } from '../../../../../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: BehaviorSubject<Array<IMovie>>;

  constructor(private http: HttpClient) {
    this.movies = new BehaviorSubject([]);
    this.getAll();
  }

  public getAll = () => {
    this.http.get(`${environment.backend}/movies`).subscribe((result: Array<IMovie>) => {
      this.movies.next(result);
    })
  };

  public search = (title: string) => {
    return this.http.get(`${environment.backend}/movies/search/${title}`)
  };

  public getByOmdbId = (omdbId: string) => {
    return this.http.get(`${environment.backend}/movies/omdb_id/${omdbId}`)
  }
}
