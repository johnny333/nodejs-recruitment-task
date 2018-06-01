import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { environment } from '../../../environments/environment';
import { IMovie } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private movies: BehaviorSubject<Array<IMovie>>;

  constructor(private http: HttpClient) {
  }

  public search() {
    this.http.get(`${environment.backend}/search`).subscribe((result:Array<IMovie>) => {

    })
  }
}
