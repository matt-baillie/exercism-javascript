// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  for (const index of stack) {
    index === card ? count++ : null;
  }
  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let count = 0;
  console.log(stack, type);
  for (const card of stack) {
    if (type) {
      card % 2 === 0 ? count++ : null;
    } else {
      card % 2 === 1 ? count++ : null;
    }
  }
  console.log(count);
  return count;
}
