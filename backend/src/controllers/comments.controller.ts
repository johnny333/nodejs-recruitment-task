/**
 * Created by jakubkolecki on 03.06.2018.
 */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Options,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CommentService } from '../services/comment.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  public async saveComment(@Body() comment, @Res() res) {
    this.commentService
      .save(comment)
      .then(value => res.status(HttpStatus.OK).json(value));
  }

  @Get(':movieId')
  public async getCommentByMovieId(@Param('movieId') movieId, @Res() res) {
    this.commentService
      .getCommentsByMovieId(movieId)
      .then(value => res.status(HttpStatus.OK).json(value));
  }
}
