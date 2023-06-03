/**
 * previous-fortunes.test.js
 * Unit test file for previous-fortunes.js
 *
 * @jest-environment jsdom
 */

import { expect, test, describe } from '@jest/globals';

import functions from '../../assets/scripts/previous-fortunes.js';

describe('Testing getStarSign', () => {
  test('Testing 4/22 gives Taurus', function () {
    expect(functions.getStarSign('4', '22')).toEqual('Taurus');
  });

  test('Testing 2/5 gives Aquarius', function () {
    expect(functions.getStarSign('2', '5')).toEqual('Aquarius');
  });

  test('Testing 13/39 gives null', function () {
    expect(functions.getStarSign('13', '39')).toBeNull();
  });

  test('Testing 10/22 gives null', function () {
    expect(functions.getStarSign('10', '22')).toEqual('Libra');
  });
});
