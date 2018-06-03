import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { CommentsService } from '../../services/comments/comments.service';
import { MoviesService } from '../../services/movies/movies.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [DetailsComponent],
  providers:[CommentsService, MoviesService]
})
export class DetailsModule { }
