// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  let newDeck = deck.map((card) => card * 2);
  return newDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((result, card) => {
    if (card == 3) {
      result.push(3, 3, 3);
    } else {
      result.push(card);
    }
    return result;
  }, []);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const half = deck.length / 2 - 1;
  let middle = deck.splice(half, 2);
  return middle;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // let newDeck
  let half = deck.length / 2 - 1;
  let first = deck.shift();
  let last = deck.pop();
  deck.splice(half, 0, last, first);
  return deck;
  // placed in middle: slice
  // return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  // filter 2s
  return deck.filter((card) => card === 2);
  //
  //
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  const newDeck = deck.reverse();
  console.log(newDeck);
  return newDeck;
}
