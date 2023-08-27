import ArrayBufferConverter from '../ArrayBufferConvert.js';
import getBuffer from '../getBuffer.js';

test('method load test', () => {
  const buffer = getBuffer();
  const test = new ArrayBufferConverter(buffer);

  expect(test.load()).toBe(buffer);
});
