import { IMovieBase } from './movie.base.interface';
import { IRate } from './rate.interface';
/**
 * Created by jakubkolecki on 01.06.2018.
 */
export interface IMovie extends IMovieBase {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Array<IRate>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
