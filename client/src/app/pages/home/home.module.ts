import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MovieDetailsDirective } from '../../directives/movie-details.directive';
import { MoviesService } from '../../services/movies/movies.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, MovieDetailsDirective],
  providers: [MoviesService],

})
export class HomeModule {
}
