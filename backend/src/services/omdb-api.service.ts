import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { Observable } from 'rxjs/index';
import { PropertiesService } from './properties.service';
import { IMovieBase } from '../../../interfaces/movie.base.interface';
import { IMovie } from '../../../interfaces/movie.interface';

/**
 * Created by jakubkolecki on 01.06.2018.
 */

@Injectable()
export class OmdbApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly properties: PropertiesService,
  ) {}

  public findMoviesByTitle(
    title: string,
  ): Observable<AxiosResponse<{ Search: Array<IMovieBase> }>> {
    return this.httpService.get(`${this.properties.getOmbApiURL()}&s=${title}`);
  }

  public findMovieByTitle(title: string): Observable<AxiosResponse<IMovie>> {
    return this.httpService.get(`${this.properties.getOmbApiURL()}&t=${title}`);
  }
  public getMovieByOmdbId(omdbId: string): Observable<AxiosResponse<IMovie>> {
    return this.httpService.get(
      `${this.properties.getOmbApiURL()}&i=${omdbId}`,
    );
  }
}
