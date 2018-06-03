import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentsService } from './services/comments/comments.service';
import { MoviesService } from './services/movies/movies.service';
import { ToastService } from 'src/app/services/notification/toast.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [MoviesService, CommentsService,ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
