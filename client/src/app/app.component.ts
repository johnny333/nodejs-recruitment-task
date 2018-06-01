import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies/movies.service';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public moviesService: MoviesService) {
  }

  ngOnInit(): void {
  }

  public openModal(){
    console.log("modal",$('.modal'))
    $(document).ready(function() {
      $('.modal').modal();
    });
  }
}
