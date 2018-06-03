import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IMovie } from '../../../interfaces/movie.interface';

/**
 * Created by jakubkolecki on 01.06.2018.
 */

@Injectable()
export class MovieService {
  constructor(
    @Inject('movieModel') private readonly movieModel: Model<IMovie>,
  ) {}

  public async getAll(): Promise<Array<IMovie>> {
    return await this.movieModel.find().exec();
  }

  public async getById(_id: string): Promise<IMovie> {
    return await this.movieModel.findOne({ _id }).exec();
  }

  public async getByOmdbId(imdbID: string): Promise<IMovie> {
    return await this.movieModel.findOne({ imdbID }).exec();
  }

  public async save(movie: IMovie): Promise<IMovie> {
    const duplicat = await this.getByOmdbId(movie.imdbID);
    if (duplicat != null) {
      return null;
    }
    const createdMovie = new this.movieModel(movie);
    return await createdMovie.save();
  }
}
