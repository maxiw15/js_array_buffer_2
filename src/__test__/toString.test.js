import ArrayBufferConverter from '../ArrayBufferConvert.js';
import getBuffer from '../getBuffer.js';

test('method toString test', () => {
  const buffer = getBuffer();
  const test = new ArrayBufferConverter();
  expect(test.toString(buffer)).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
