/**
 * previous-fortunes.test.js
 * Unit test file for previous-fortunes.js
 *
 * @jest-environment jsdom
 */

import { getStarSign } from '../../assets/scripts/previous-fortunes.js';

describe('Testing getStarSign', () => {
  it('Testing 4/22 gives Taurus', function () {
    expect(getStarSign('4', '22')).toEqual('Taurus ♉');
  });

  it('Testing 2/5 gives Aquarius', function () {
    expect(getStarSign('2', '5')).toEqual('Aquarius	♒');
  });

  it('Testing 13/39 gives null', function () {
    expect(getStarSign('13', '39')).toBeNull();
  });

  it('Testing 10/22 gives null', function () {
    expect(getStarSign('10', '22')).toEqual('Libra ♎');
  });
});
