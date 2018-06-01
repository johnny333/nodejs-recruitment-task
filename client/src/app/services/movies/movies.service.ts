import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { IMovie } from '../../../../../backend/src/interfaces/movie.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: BehaviorSubject<Array<IMovie>>;

  constructor(private http: HttpClient) {
    this.movies = new BehaviorSubject([]);
    this.search();
  }

  public search = () => {
    this.http.get(`${environment.backend}/movies`).subscribe((result: Array<IMovie>) => {
      this.movies.next(result);
    })
  }
}
