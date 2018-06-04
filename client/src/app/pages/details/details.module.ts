import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from '../../services/comments/comments.service';
import { MoviesService } from '../../services/movies/movies.service';
import { ToastService } from '../../services/notification/toast.service';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule
  ],
  declarations: [DetailsComponent],
  providers: [CommentsService, MoviesService, ToastService]
})
export class DetailsModule {
}
