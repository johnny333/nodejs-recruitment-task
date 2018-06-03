import { Connection } from 'mongoose';
import { CommentSchema } from '../schemas/comment.shema';
import { MovieSchema } from '../schemas/movie.schema';
/**
 * Created by jakubkolecki on 01.06.2018.
 */
export const movieProviders = [
  {
    provide: 'movieModel',
    useFactory: (connection: Connection) => connection.model('Movie', MovieSchema),
    inject: ['DbConnectionToken'],
  }, {
    provide: 'commentModel',
    useFactory: (connection: Connection) => connection.model('Comment', CommentSchema),
    inject: ['DbConnectionToken'],
  }
];