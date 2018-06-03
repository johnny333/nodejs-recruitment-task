import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IComment } from '../../../interfaces/comment.interface';

/**
 * Created by jakubkolecki on 03.06.2018.
 */
@Injectable()
export class CommentService {
  constructor(
    @Inject('commentModel') private readonly commentModel: Model<IComment>,
  ) {}

  public async getAll(): Promise<Array<IComment>> {
    return await this.commentModel.find().exec();
  }

  public async save(movie: IComment): Promise<IComment> {
    movie.Date = new Date();
    const createdComment = new this.commentModel(movie);
    return await createdComment.save();
  }

  public async getCommentsByMovieId(
    movie_id: string,
  ): Promise<Array<IComment>> {
    return await this.commentModel.find({ MovieID: movie_id }).exec();
  }
}
