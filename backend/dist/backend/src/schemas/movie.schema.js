"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MovieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    imdbID: String,
    Type: String,
    Poster: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Ratings: [
        {
            Source: String,
            Value: String,
        },
    ],
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String,
});
//# sourceMappingURL=movie.schema.js.map