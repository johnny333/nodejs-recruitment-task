import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMovieBase } from '../../../interfaces/movie.base.interface';
import { MoviesService } from './services/movies/movies.service';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public searchResult: Array<IMovieBase> = [];
  public selectedMovie: IMovieBase = null;

  constructor(public moviesService: MoviesService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    $('.carousel').carousel();
    $('.modal').modal();
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
}
