import {
  Controller,
  Get,
  HttpStatus,
  Options,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { IMovieWithComments } from '../../../interfaces/movie-with-comments.interface';
import { IMovieBase } from '../../../interfaces/movie.base.interface';
import { IMovie } from '../../../interfaces/movie.interface';
import { CommentService } from '../services/comment.service';
import { MovieService } from '../services/movie.service';
import { OmdbApiService } from '../services/omdb-api.service';
/**
 * Created by jakubkolecki on 03.06.2018.
 */
@Controller('movies')
export class MoviesController {
  constructor(
    private readonly omdbApi: OmdbApiService,
    private readonly commentService: CommentService,
    private readonly movieService: MovieService,
  ) {}

  @Get('search/title/:title')
  public async findByNames(@Param('title') title, @Res() res) {
    this.omdbApi
      .findMoviesByTitle(title)
      .subscribe((movies: AxiosResponse<{ Search: Array<IMovieBase> }>) => {
        res.status(HttpStatus.OK).json(movies.data.Search);
      });
  }

  @Get('title/:title')
  public async findByName(@Param('title') title, @Res() res) {
    this.omdbApi
      .findMovieByTitle(title)
      .subscribe((movie: AxiosResponse<IMovie>) => {
        res.status(HttpStatus.OK).json(movie.data);
      });
  }

  @Get()
  public async getAllMovies(@Res() res) {
    this.movieService.getAll().then((movies: Array<IMovie>) => {
      res.status(HttpStatus.OK).json(movies);
    });
  }

  @Get('omdbid/:omdbId')
  public async getMovieByOmdbId(@Param('omdbId') omdbId, @Res() res) {
    this.omdbApi
      .getMovieByOmdbId(omdbId)
      .subscribe((movie: AxiosResponse<IMovie>) => {
        res.status(HttpStatus.OK).json(movie.data);
      });
  }
  @Post('omdbid/:omdbId')
  public async saveMovie(@Param('omdbId') omdbId, @Res() res) {
    this.omdbApi
      .getMovieByOmdbId(omdbId)
      .subscribe((movie: AxiosResponse<IMovie>) => {
        let movieData: IMovie = movie.data;
        this.movieService
          .save(movie.data)
          .then(value => res.status(HttpStatus.OK).json(value));
      });
  }

  @Get('id/:id')
  public async getMovieById(@Param('id') id, @Res() res) {
    this.movieService
      .getById(id)
      .then(value => res.status(HttpStatus.OK).json(value));
  }

  @Get('comments/id/:id')
  public async getMovieWithCommentsById(@Param('id') id, @Res() res) {
    this.commentService.getCommentsByMovieId(id).then(comments => {
      this.movieService
        .getById(id)
        .then(movie =>
          res
            .status(HttpStatus.OK)
            .json(<IMovieWithComments>{ comments, movie }),
        );
    });
  }
}
