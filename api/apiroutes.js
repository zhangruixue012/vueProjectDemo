// Mock data by hicoldcat

var express = require('express');
var apiRoutes = express.Router();


var processlist = require('./mockdata/processlist.json');


apiRoutes.get('/api/mockdata/processlist', function (req, res) {
  res.json(processlist);
});

module.exports = apiRoutes;
