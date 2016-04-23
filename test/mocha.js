// Root Mocha Test File
// All mocha test files must be included in here or it won't be run.
// This is also to leverage a global require
'use strict'

const path = require('path')

// global require
global.require = (id) => {
  return require(path.join(__dirname, '/../app/', id))
}

// Require test files here
require('./roster/player.mocha.js')
