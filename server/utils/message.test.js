var expect = require('expect')

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it ('should generate correct message object', () => {
    var message = generateMessage('chuck', 'hey there')
    expect(message.from).toBe('chuck')
    expect(message.text).toBe('hey there')
    expect(typeof message.createdAt).toBe('number')
  })
})