"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const comment_service_1 = require("../services/comment.service");
const movie_service_1 = require("../services/movie.service");
const omdb_api_service_1 = require("../services/omdb-api.service");
let MoviesController = class MoviesController {
    constructor(omdbApi, commentService, movieService) {
        this.omdbApi = omdbApi;
        this.commentService = commentService;
        this.movieService = movieService;
    }
    findByNames(title, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.omdbApi
                .findMoviesByTitle(title)
                .subscribe((movies) => {
                res.status(common_1.HttpStatus.OK).json(movies.data.Search);
            });
        });
    }
    findByName(title, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.omdbApi
                .findMovieByTitle(title)
                .subscribe((movie) => {
                res.status(common_1.HttpStatus.OK).json(movie.data);
            });
        });
    }
    getAllMovies(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.movieService.getAll().then((movies) => {
                res.status(common_1.HttpStatus.OK).json(movies);
            });
        });
    }
    getMovieByOmdbId(omdbId, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.omdbApi
                .getMovieByOmdbId(omdbId)
                .subscribe((movie) => {
                res.status(common_1.HttpStatus.OK).json(movie.data);
            });
        });
    }
    saveMovie(omdbId, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.omdbApi
                .getMovieByOmdbId(omdbId)
                .subscribe((movie) => {
                let movieData = movie.data;
                this.movieService
                    .save(movie.data)
                    .then(value => res.status(common_1.HttpStatus.OK).json(value));
            });
        });
    }
    getMovieById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.movieService
                .getById(id)
                .then(value => res.status(common_1.HttpStatus.OK).json(value));
        });
    }
    getMovieWithCommentsById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commentService.getCommentsByMovieId(id).then(comments => {
                this.movieService
                    .getById(id)
                    .then(movie => res
                    .status(common_1.HttpStatus.OK)
                    .json({ comments, movie }));
            });
        });
    }
};
__decorate([
    common_1.Get('search/title/:title'),
    __param(0, common_1.Param('title')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findByNames", null);
__decorate([
    common_1.Get('title/:title'),
    __param(0, common_1.Param('title')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findByName", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getAllMovies", null);
__decorate([
    common_1.Get('omdbid/:omdbId'),
    __param(0, common_1.Param('omdbId')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovieByOmdbId", null);
__decorate([
    common_1.Post('omdbid/:omdbId'),
    __param(0, common_1.Param('omdbId')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "saveMovie", null);
__decorate([
    common_1.Get('id/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovieById", null);
__decorate([
    common_1.Get('comments/id/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovieWithCommentsById", null);
MoviesController = __decorate([
    common_1.Controller('movies'),
    __metadata("design:paramtypes", [omdb_api_service_1.OmdbApiService,
        comment_service_1.CommentService,
        movie_service_1.MovieService])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map