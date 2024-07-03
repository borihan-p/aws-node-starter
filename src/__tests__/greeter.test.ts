import { describe, expect, test } from '@jest/globals';
import { greeter } from '../greeter';

describe('greeter module', () => {
  test('greeter', () => {
    expect(greeter('John Wick')).toBe('Hello John Wick!');
  });
});
