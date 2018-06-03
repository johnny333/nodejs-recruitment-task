import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMovieBase } from '../../../../../../interfaces/movie.base.interface';
import { MoviesService } from '../../../services/movies/movies.service';
import { IMovie } from '../../../../../../interfaces/movie.interface';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchResult: Array<IMovieBase> = [];
  public selectedMovie: IMovieBase = null;

  constructor(public moviesService: MoviesService) {
  }

  ngOnInit(): void {
    $('#modal1').modal();
  }

  public openModal() {
    $('#modal1').modal('open');
  }

  search = (title: string) => {
    if (title == null || title.length == 0) {
      this.searchResult = [];
      return;
    }
    this.moviesService.search(title).subscribe((movies: Array<IMovieBase>) => {
      this.searchResult = movies;
    })
  }

  chooeseMovie = (movie: IMovieBase) => {
    this.selectedMovie = movie;
  }
  ifActive = (movie: IMovieBase) => {
    if (!!this.selectedMovie && movie.imdbID == this.selectedMovie.imdbID) {
      return 'active';
    }
    return 'background-color-search-table';
  }

  isPosterAvliable = (movie: IMovieBase) => {
    return movie.Poster != 'N/A';

  }

  addNewMovie = () =>{
    if(!this.selectedMovie){
      return;
    }
    this.moviesService.addByOmdbId(this.selectedMovie.imdbID);
  }
}
