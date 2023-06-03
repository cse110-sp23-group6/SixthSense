import { expect, test, describe } from '@jest/globals';
import { shuffleArray, randomInt } from '../../assets/scripts/helpers';
import { countItemsInsideArray } from './jest_helpers';

describe('Testing Helpers', function () {
  test('Sanity check: jest helper countItemsInsideArray correctly counts items', function () {
    const testArray = [6, 'a', 'a', 'b', 'c', 'c', 'c', 1, 2, 6, 'd', 'e'];

    expect(countItemsInsideArray(testArray)).toEqual(
      {
        a: 2,
        b: 1,
        c: 3,
        d: 1,
        e: 1,
        1: 1,
        2: 1,
        6: 2
      }
    );
  });

  test('randomInt gives valid int between the lower / upper bound, inclusive (n = 1000)', function () {
    const lowerBound = 0;
    const upperBound = 10;
    for (let i = 0; i < 1000; i++) {
      expect(randomInt(lowerBound, upperBound)).toBeWithinRangeInclusive(lowerBound, upperBound);
    }
  });

  test('shuffleArray gives valid permutation of array (n = 1000)', function () {
    const testArray1 = ['a', 'b', 'c', 'c', 'd', 'e'];
    const testArray2 = [100, 200, 300, 400, 500, 600, 700];

    // Asserts that the number of each element is preserved under each of the
    // n = 1000 trials
    function runTestOnArray (array) {
      const origArrayCounts = countItemsInsideArray(array);

      for (let i = 0; i < 1000; i++) {
        const newArray = shuffleArray(array);

        const newArrayCounts = countItemsInsideArray(newArray);

        expect(origArrayCounts).toEqual(newArrayCounts);
      }
    }

    runTestOnArray(testArray1);
    runTestOnArray(testArray2);
  });

  test('shuffleArray moves items inside array', function () {
    const testArray = [100, 200, 300, 400, 500, 600];

    /**
     * Shuffles array (of 6 objects) 1000 times. Astronomically low chance
     * 1-(1/24)^1000 of all of the shuffles being the same, if code is working
     */
    let allSame = true;
    for (let i = 0; i < 1000; i++) {
      const newArray = shuffleArray(testArray);

      const isSame = newArray.length === testArray.length && newArray.every(function (element, index) {
        return element === testArray[index];
      });

      if (!isSame) {
        allSame = false;
        break;
      }
    }

    expect(allSame).toBeFalsy();
  });
});
