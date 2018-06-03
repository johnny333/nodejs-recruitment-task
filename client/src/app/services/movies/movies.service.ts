import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { IMovie } from '../../../../../interfaces/movie.interface';
import { environment } from '../../../environments/environment';
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
    return this.http.get(`${environment.backend}/movies/search/title/${title}`)
  };

  public getByOmdbId = (omdbId: string) => {
    return this.http.get(`${environment.backend}/movies/omdbid/${omdbId}`)
  }

  public addByOmdbId = (omdbId: string) => {
    return this.http.post(`${environment.backend}/movies/omdbid/${omdbId}`, {}).subscribe((movie: IMovie) => {
      this.movies.next([...this.movies.value, movie]);
    });
  }

  public getByMovieId = (omdbId: string) => {
    return this.http.get(`${environment.backend}/movies/id/${omdbId}`)
  }
  public getByMovieWithCommentsId = (omdbId: string) => {
    return this.http.get(`${environment.backend}/movies/comments/id/${omdbId}`)
  }
}
