import { MovieSchema } from '../schemas/movie.schema';
import { Connection } from 'mongoose';
/**
 * Created by jakubkolecki on 01.06.2018.
 */
export const movieProviders = [
  {
    provide: 'movieModel',
    useFactory: (connection: Connection) => connection.model('Movie', MovieSchema),
    inject: ['DbConnectionToken'],
  }
];