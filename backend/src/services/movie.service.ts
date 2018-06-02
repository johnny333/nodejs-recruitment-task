import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IMovie } from '../../../interfaces/movie.interface';

/**
 * Created by jakubkolecki on 01.06.2018.
 */

@Injectable()
export class MovieService {

  constructor(@Inject('movieModel')
              private readonly movieModel: Model<IMovie>) {
  }

  public async getAll(): Promise<Array<IMovie>> {
    return await this.movieModel.find().exec();
  }

  public async save(movie: IMovie): Promise<IMovie> {
    const createdMovie = new this.movieModel(movie);
    return await createdMovie.save();

  }

}