import { Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { IMovieBase } from './interfaces/movie.base.interface';
import { IMovie } from './interfaces/movie.interface';
import { MovieService } from './services/movie.service';
import { OmdbApiService } from './services/omdb-api.service';

@Controller('movies')
export class AppController {
  constructor(private readonly omdbApi: OmdbApiService, private readonly movieService: MovieService) {
  }

  @Get('search/:title')
  public async findByNames(@Param('title') title, @Res() res) {
    this.omdbApi.findMoviesByTitle(title).subscribe((movies: AxiosResponse<{ Search: Array<IMovieBase> }>) => {
      res.status(HttpStatus.OK).json(movies.data.Search);
    });
  }

  @Get(':title')
  public async findByName(@Param('title') title, @Res() res) {
    this.omdbApi.findMovieByTitle(title).subscribe((movie: AxiosResponse<IMovie>) => {
      res.status(HttpStatus.OK).json(movie.data);
    });
  }

  @Get()
  public async getAllMovies(@Res() res) {
    this.movieService.getAll().then((movies: Array<IMovie>) => {
      res.status(HttpStatus.OK).json(movies);
    });
  }

  @Post(':omdbId')
  public async saveMovie(@Param('omdbId') omdbId, @Res() res) {
    this.omdbApi.getMovieByOmdbId(omdbId).subscribe((movie: AxiosResponse<IMovie>) => {
      let movieData: IMovie = movie.data;
      this.movieService.save(movie.data).then(value => res.status(HttpStatus.OK).json(value));
    });
  }
}
