'use strict';

var _ = require('lodash');
var Votes = require('./votes.model');

///api/votes/pollname/"+$scope.pollName)
exports.findbyName = function(req, res){
  Votes.find({"pollName":req.params.pollName}, function (err, votes) {
    if(err) { return handleError(res, err); }
    if(!votes) { return res.status(404).send('Not Found'); }
    return res.json(votes);
  });
}


// get list by user id
exports.findbyuid = function(req, res){
  Votes.find({"createdBy":req.params.uid}, function (err, votes) {
    if(err) { return handleError(res, err); }
    if(!votes) { return res.status(404).send('Not Found'); }
    return res.json(votes);
  });
}

// Get list of votess
exports.index = function(req, res) {
  Votes.find(function (err, votess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(votess);
  });
};

// Get a single votes
exports.show = function(req, res) {
  Votes.findById(req.params.id, function (err, votes) {
    if(err) { return handleError(res, err); }
    if(!votes) { return res.status(404).send('Not Found'); }
    return res.json(votes);
  });
};

// Creates a new votes in the DB.
exports.create = function(req, res) {
  Votes.create(req.body, function(err, votes) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(votes);
  });
};

// Updates an existing votes in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Votes.findById(req.params.id, function (err, votes) {
    if (err) { return handleError(res, err); }
    if(!votes) { return res.status(404).send('Not Found'); }
    //var updated = _.merge(votes, req.body);
    var updated = _.extend(votes, req.body);
    //////////////////////
    //console.log("server update, after _merge", updated);

    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(votes);
    });
  });
};

// Deletes a votes from the DB.
exports.destroy = function(req, res) {
  Votes.findById(req.params.id, function (err, votes) {
    if(err) { return handleError(res, err); }
    if(!votes) { return res.status(404).send('Not Found'); }
    votes.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}