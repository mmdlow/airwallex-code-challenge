import { stripErrorPrefix } from '@/lib/strip-error-prefix';
import { describe, expect, it } from 'vitest';

function concatTokens(...tokens: string[]) {
  return tokens.join(': ');
}

describe(stripErrorPrefix, () => {
  it('should strip a prefix from an Error message or string', () => {
    const messages = [
      ['Bad Request', 'Email is already in use'],
      ['Token 1', 'Token 2', 'Token 3'],
      ['Message without prefix'],
      [''],
    ];

    messages.forEach(msg => {
      const expectedResult = msg.length > 1 ? concatTokens(...msg.slice(1)) : msg[0];
      expect(stripErrorPrefix(concatTokens(...msg))).toBe(expectedResult);
    });

    messages.forEach(msg => {
      const error = new Error(concatTokens(...msg));
      const expectedResult = msg.length > 1 ? concatTokens(...msg.slice(1)) : msg[0];
      expect(stripErrorPrefix(error)).toBe(expectedResult);
    });
  });

  it('should handle empty Errors', () => {
    expect(stripErrorPrefix(new Error())).toBe('');
  });
});
