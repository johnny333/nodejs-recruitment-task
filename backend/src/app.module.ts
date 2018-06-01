import { HttpModule, Module } from '@nestjs/common';

import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { movieProviders } from './models/movie.model.provider';
import { MovieService } from './services/movie.service';
import { OmdbApiService } from './services/omdb-api.service';
import { PropertiesService } from './services/properties.service';
@Module({
  imports: [
    HttpModule
  ],
  controllers: [AppController],
  providers: [
    PropertiesService,
    OmdbApiService,
    {
      provide: 'DbConnectionToken',
      useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect('mongodb://localhost/movies'),
    },
    ...movieProviders,
    MovieService
  ]
})
export class AppModule {
}
