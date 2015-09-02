'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VotesSchema = new Schema({
	// _id: Number // autogenerated 
	createdBy:{ type: Schema.Types.ObjectId, ref: 'User' },
 	pollName: String,
  	pollOptions: Array,
  	usersVote: Array  // {uid:_id,pollName,""}
  	//placeholders: Array
});

module.exports = mongoose.model('Votes', VotesSchema);