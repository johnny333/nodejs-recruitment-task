import { IComment } from './comment.interface';
import { IMovie } from './movie.interface';
/**
 * Created by jakubkolecki on 03.06.2018.
 */
export interface IMovieWithComments {
  movie: IMovie;
  comments: Array<IComment>;
}