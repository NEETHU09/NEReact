var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
  Title:String,
   Year:String,
   Rated: String,
   Released:String,
   Runtime: String,
   Genre:String,
   Director:String,
   Writer: String,
   Actors: String,
   Plot: String,
   Language: String,
   Country: String,
   Awards: String,
   Poster: String,
   Metascore: String,
   imdbRating: String,
   imdbVotes:String,
   imdbID: String,
   Type:String,
   Response:String
});


var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
