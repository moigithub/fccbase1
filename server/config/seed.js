/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');
var Votes = require('../api/votes/votes.model');
var User = require('../api/user/user.model');
Votes.find({}).remove(function(){
  Votes.create({
    createdBy:1,   // _id (user id)
    pollName: "poll 1",
    pollOptions: ["option1"],
    usersVote:[{ uid:1, pollOption:"option1" }] // Object array {_id: optionName}
  },{
    createdBy:2,
    pollName: "poll 2a",
    pollOptions: ["option a1","option a2"],
    usersVote:[{ uid:1, pollOption:"option a1" },
               { uid:2, pollOption:"option a2" },
               { uid:3, pollOption:"option a2" }
              ] // Object array {_id: optionName}
  },{
    createdBy:3,
    pollName: "poll 3a",
    pollOptions: ["boo","fart","poo"],
    usersVote:[{ uid:1, pollOption:"boo" },
               { uid:2, pollOption:"boo" },
               { uid:3, pollOption:"poo" }
              ] // Object array {_id: optionName}
  }
  );
});
/*
Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});
*/
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});