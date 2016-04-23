'use strict'

class Player {
  // Player Object
  // This holds most of the information regarding each player.

  constructor () {
    // Constructor
    // Initialize values with default variables
    this._name = ''
    this._times = []
  }

  name (name) {
    // Name Getter and Setter
    // Getter, passes no arguement
    if (typeof name === 'undefined') return this._name
    // Setter, name must be a string
    else if (typeof name === 'string') this._name = name
    // Error, arg is not a string
    else console.warn('Player name must be string', name)
    // Setter and Error cases will return this
    return this
  }

  addTime (time) {
    // Add Time to players record
    if (typeof time === 'number') this._times.push(time)
    // throw an error if it is not a number
    else console.warn('time was not added, must be number', time)
    // return this for chaining
    return this
  }

  times () {
    // Get Players Times
    // @return {Array} times
    return this._times
  }

}

module.exports = Player
