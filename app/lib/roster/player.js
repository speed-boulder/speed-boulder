'use strict'

class Player {
  /**
   * @member {String} name - player's name
   */

  constructor (name) {
    /**
     * Initialize Player with given name
     *
     * @param {String} name
     * @return {Player} this
     */

    // Initialize name. Use toString() to handle non-string types.
    this.name = name.toString() || null
  }

}

module.exports = Player
