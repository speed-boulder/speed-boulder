/* eslint-env mocha */
'use strict'

const assert = require('assert')
const Player = global.require('./lib/roster/player.js')

describe('class Player', () => {
  describe('#name()', () => {
    it('should set name when string is passed', () => {
      let player = new Player()
      let name = 'john'
      player.name(name)
      assert(player._name, name)
    })

    it('should get name when nothing is passed', () => {
      let player = new Player()
      let name = 'john'
      player._name = name
      assert(player.name(), name)
    })

    it('should NOT set name when string is passed', () => {
      let player = new Player()
      let types = [null, true, 0, {}]
      let name = 'john'
      player._name = name
      for (let type of types) {
        player.name(type)
        assert(player._name, name)
      }
    })

    it('should return `this` when name is set', () => {
      let player = new Player()
      let name = 'john'
      assert(player.name(name), player)
    })
  })

  describe('#addTime()', () => {
    it('should add time to player when num is passed', () => {
      let player = new Player()
      let time = 1000
      player.addTime(time)
      assert(player._times[0], time)
    })

    it('should NOT add time if not a number', () => {
      let player = new Player()
      let types = [null, true, '', {}]
      let time = 1000
      player._times.push(time)
      for (let type of types) {
        player.addTime(type)
        assert(player._times.length, player._times.length)
      }
    })

    it('should return `this`', () => {
      let player = new Player()
      assert(player.addTime(), player)
    })
  })

  describe('#times()', () => {
    it('should return players times', () => {
      let player = new Player()
      let time = 1000
      player._times.push(time)
      let times = player.times()
      assert(times.length, 1)
      assert(times[0], time)
    })
  })
})
