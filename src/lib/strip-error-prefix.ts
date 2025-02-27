/**
 * Strips leading error type prefixes from error messages. Typically used for parsing backend
 * messages.
 *
 * @example
 * ```ts
 * console.log(stripErrorPrefix('Bad request: my error message')) // 'my error message'
 * ```
 * @param error
 * @returns
 */
function stripErrorPrefix(error: string | Error) {
  const message = error instanceof Error ? error.message : error;
  const splitArray = message.split(':');
  return splitArray.length > 1 ? splitArray.slice(1).join(':').trim() : splitArray[0];
}

export { stripErrorPrefix };
