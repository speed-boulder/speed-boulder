/* eslint-env mocha */
'use strict'

const assert = require('assert')
const Player = global.require('./lib/roster/player.js')

describe('class Player', () => {
  describe('#constructor()', () => {
    it('should set name passed as param.', () => {
      const NAME = 'john'
      let PLAYER = new Player(NAME)
      assert.strictEqual(NAME, PLAYER.name)
    })
  })
})
