import { Component, OnInit } from '@angular/core';
import { IMovieBase } from '../../../interfaces/movie.base.interface';
import { MoviesService } from './services/movies/movies.service';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public searchResult: Array<IMovieBase> = [];
  public selectedMovie: IMovieBase  = null;

  constructor(public moviesService: MoviesService) {
  }

  ngOnInit(): void {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
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
}
