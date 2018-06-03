import { HttpModule, Module, NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';

import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { CommentsController } from './controllers/comments.controller';
import { MoviesController } from './controllers/movies.controller';
import { CorsMiddleware } from './middlewares/cors.middleware';
import { movieProviders } from './models/movie.model.provider';
import { CommentService } from './services/comment.service';
import { MovieService } from './services/movie.service';
import { OmdbApiService } from './services/omdb-api.service';
import { PropertiesService } from './services/properties.service';
@Module({
  imports: [HttpModule],
  controllers: [CommentsController, MoviesController, AppController],
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
    CommentService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('/*');
  }
}
