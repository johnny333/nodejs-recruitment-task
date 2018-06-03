import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { MoviesService } from './services/movies/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
