'use strict'

class stopwatch {

  constructor (container) {
    // Save parent object to class instance
    this.PARENT = container

    // Create html objects
    let sNode = document.createElement('span')
    let period = document.createTextNode('.')
    let msNode = document.createElement('span')

    msNode.className = 'ms'
    sNode.className = 's'

    // append objects to DOM
    sNode = this.PARENT.appendChild(sNode)
    period = this.PARENT.appendChild(period)
    msNode = this.PARENT.appendChild(msNode)

    // save the two spans to instance
    this.SNODE = sNode
    this.MSNODE = msNode
  }
}

module.exports = stopwatch
