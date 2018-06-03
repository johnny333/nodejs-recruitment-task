/**
 * Created by jakubkolecki on 01.06.2018.
 */
import * as mongoose from 'mongoose';
export const CommentSchema = new mongoose.Schema({
  Nick: String,
  Comment: String,
  MovieID: String,
  Date: Date,
});
/**
 * Created by jakubkolecki on 03.06.2018.
 */
