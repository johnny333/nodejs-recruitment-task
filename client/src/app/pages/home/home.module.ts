import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieDetailsDirective } from '../../directives/movie-details.directive';
import { MoviesService } from '../../services/movies/movies.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, MovieDetailsDirective],
  providers: [MoviesService],

})
export class HomeModule {
}
