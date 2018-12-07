const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message', () => {
    var from='Jen';
    var text='Some message';
    var message = generateMessage(from,text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });

});
describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from='Matt';
    var lat = 4;
    var lng = 5;
    var url = 'https://www.google.com/maps?q=4,5';
    var message = generateLocationMessage(from, lat, lng);
    expect(message.url).toBeA('string');
    expect(message.url).toBe(url);
    expect(message.from).toBe('Matt');
    expect(message.createdAt).toBeA('number');
  });
})
