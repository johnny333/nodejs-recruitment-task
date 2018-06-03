/**
 * Created by jakubkolecki on 01.06.2018.
 */
import * as mongoose from 'mongoose';
export const MovieSchema = new mongoose.Schema({
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
