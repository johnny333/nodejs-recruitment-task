import { HttpModule, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';

import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { CorsMiddleware } from './middlewares/cors.middleware';
import { movieProviders } from './models/movie.model.provider';
import { MovieService } from './services/movie.service';
import { OmdbApiService } from './services/omdb-api.service';
import { PropertiesService } from './services/properties.service';
import { CommentService } from './services/comment.service';
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
    MovieService,
    CommentService
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): MiddlewaresConsumer | void {
    let path: any = '*';
    consumer.apply([CorsMiddleware]).forRoutes('*')
  }
}
