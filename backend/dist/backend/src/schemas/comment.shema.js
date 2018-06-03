"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CommentSchema = new mongoose.Schema({
    Nick: String,
    Comment: String,
    MovieID: String,
    Date: Date,
});
//# sourceMappingURL=comment.shema.js.map