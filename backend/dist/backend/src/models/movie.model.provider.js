"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_shema_1 = require("../schemas/comment.shema");
const movie_schema_1 = require("../schemas/movie.schema");
exports.movieProviders = [
    {
        provide: 'movieModel',
        useFactory: (connection) => connection.model('Movie', movie_schema_1.MovieSchema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'commentModel',
        useFactory: (connection) => connection.model('Comment', comment_shema_1.CommentSchema),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=movie.model.provider.js.map