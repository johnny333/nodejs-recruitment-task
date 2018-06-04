"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose = require("mongoose");
const app_controller_1 = require("./app.controller");
const comments_controller_1 = require("./controllers/comments.controller");
const movies_controller_1 = require("./controllers/movies.controller");
const cors_middleware_1 = require("./middlewares/cors.middleware");
const movie_model_provider_1 = require("./models/movie.model.provider");
const comment_service_1 = require("./services/comment.service");
const movie_service_1 = require("./services/movie.service");
const omdb_api_service_1 = require("./services/omdb-api.service");
const properties_service_1 = require("./services/properties.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cors_middleware_1.CorsMiddleware).forRoutes('/*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        controllers: [comments_controller_1.CommentsController, movies_controller_1.MoviesController, app_controller_1.AppController],
        providers: [
            properties_service_1.PropertiesService,
            omdb_api_service_1.OmdbApiService,
            {
                provide: 'DbConnectionToken',
                useFactory: () => __awaiter(this, void 0, void 0, function* () { return yield mongoose.connect('mongodb://localhost/movies'); }),
            },
            ...movie_model_provider_1.movieProviders,
            movie_service_1.MovieService,
            comment_service_1.CommentService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map