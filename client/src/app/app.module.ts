import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OmdbApiService } from './services/omdb/omdb-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OmdbApiService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
