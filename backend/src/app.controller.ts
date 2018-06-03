import { Body, Controller, Get, HttpStatus, Options, Param, Post, Res } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { IMovieBase } from '../../interfaces/movie.base.interface';
import { IMovie } from '../../interfaces/movie.interface';
import { CommentService } from './services/comment.service';
import { MovieService } from './services/movie.service';
import { OmdbApiService } from './services/omdb-api.service';

@Controller()
export class AppController {
  constructor(private readonly omdbApi: OmdbApiService,
              private readonly movieService: MovieService,
              private readonly commentService: CommentService,) {
  }

  @Options('/*')
  public async options(@Res() res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.status(HttpStatus.OK).json();
  }
}
