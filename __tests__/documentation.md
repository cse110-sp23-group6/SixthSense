# E2E Tests
## File Name: e2e.test.js

**General Navigation:** These are designed to test the nagivation of the main page 

### Test 1 (Line 15)
Function: Tests whether clicking on the 'Get Today's Fortune' button correctly takes the user to the Choose-Your-Fortune page.

---

**Love Navigation:** These are designed to test the navigation and functionality of Choose Your Fortune, Emotions1 and Emotions2 pages after the user selects the Love Fortune

### Test 2 (Line 34)
Function: From the Choose Your Fortune page: Tests if clicking on the Love fortune button takes the user to the next page where the user picks an image (Emotions1) while sending a query of 'love' through the url.

### Test 3 (Line 42)
Function: From Emotions1 page: Tests if the user did not select an image on the first quiz, then clicking on the next button keeps the user on the same page.

### Test 4 (Line 52)
Function: From Emotions1 page: Tests after selecting the second image and then clicking on the next button, it takes the user to the next page where the user picks a quote (Emotions2). Checks if the query of 'love' is maintained.

### Test 5 (Line 62)
Function: From Emotions2 page: Tests if the user did not select a quote on the second quiz, then clicking on the next button keeps the user on the same page.

### Test 6 (Line 72)
Function: Tests whether clicking on the back button from Emotions2 takes the user to Emotions1. Checks if the query of 'love' is maintained.

### Test 7 (Line 80)
Function: Tests whether clicking on the back button from Emotions1 takes the user to the Choose-Your-Fortune page. Checks if the query is cleared.

---

**Career Navigation:** These are designed to test the navigation and functionality of Choose Your Fortune, Emotions1 and Emotions2 pages after the user selects the Career Fortune

### Test 8 (Line 107)
Function: From the Choose Your Fortune page: Tests if clicking on the Career fortune button takes the user to the next page where the user picks an image (Emotions1) while sending a query of 'career' through the url.

### Test 9 (Line 115)
Function: From Emotions1 page: Tests if the user did not select an image on the first quiz, then clicking on the next button keeps the user on the same page.

### Test 10 (Line 125)
Function: From Emotions1 page: Tests after selecting the second image and then clicking on the next button, it takes the user to the next page where the user picks a quote (Emotions2). Checks if the query of 'career' is maintained.

### Test 11 (Line 135)
Function: From Emotions2 page: Tests if the user did not select a quote on the second quiz, then clicking on the next button keeps the user on the same page.

### Test 12 (Line 145)
Function: Tests whether clicking on the back button from Emotions2 takes the user to Emotions1. Checks if the query of 'career' is maintained.

### Test 13 (Line 153)
Function: Tests whether clicking on the back button from Emotions1 takes the user to the Choose-Your-Fortune page. Checks if the query is cleared.

---

**Health Navigation:** These are designed to test the navigation and functionality of Choose Your Fortune, Emotions1 and Emotions2 pages after the user selects the Health Fortune

### Test 14 (Line 164)
Function: From the Choose Your Fortune page: Tests if clicking on the Health fortune button takes the user to the next page where the user picks an image (Emotions1) while sending a query of 'health' through the url.

### Test 15 (Line 172)
Function: From Emotions1 page: Tests if the user did not select an image on the first quiz, then clicking on the next button keeps the user on the same page.

### Test 16 (Line 182)
Function: From Emotions1 page: Tests after selecting the second image and then clicking on the next button, it takes the user to the next page where the user picks a quote (Emotions2). Checks if the query of 'health' is maintained.

### Test 17 (Line 192)
Function: From Emotions2 page: Tests if the user did not select a quote on the second quiz, then clicking on the next button keeps the user on the same page.

### Test 18 (Line 202)
Function: Tests whether clicking on the back button from Emotions2 takes the user to Emotions1. Checks if the query of 'health' is maintained.

### Test 19 (Line 210)
Function: Tests whether clicking on the back button from Emotions1 takes the user to the Choose-Your-Fortune page. Checks if the query is cleared.

---

**Friends/Family Navigation:** These are designed to test the navigation and functionality of Choose Your Fortune, Emotions1 and Emotions2 pages after the user selects the Friends & Family Fortune

### Test 20 (Line 221)
Function: From the Choose Your Fortune page: Tests if clicking on the Friends & Family fortune button takes the user to the next page where the user picks an image (Emotions1) while sending a query of 'friends_and_family' through the url.

### Test 21 (Line 229)
Function: From Emotions1 page: Tests if the user did not select an image on the first quiz, then clicking on the next button keeps the user on the same page.

### Test 22 (Line 239)
Function: From Emotions1 page: Tests after selecting the second image and then clicking on the next button, it takes the user to the next page where the user picks a quote (Emotions2). Checks if the query of 'friends_and_family' is maintained.

### Test 23 (Line 249)
Function: From Emotions2 page: Tests if the user did not select a quote on the second quiz, then clicking on the next button keeps the user on the same page.

### Test 24 (Line 259)
Function: Tests whether clicking on the back button from Emotions2 takes the user to Emotions1. Checks if the query of 'friends_and_family' is maintained.

### Test 25 (Line 267)
Function: Tests whether clicking on the back button from Emotions1 takes the user to the Choose-Your-Fortune page. Checks if the query is cleared.

# Unit Tests

## File Name: helpers.test.js

**Helpers:** These are designed to test the correctness of the helper functions that are used throughout the app's javascript files.

### Test 1 (Line 6)
Function: Given a set of items in an array, correctly counts the number of occurences for each item in that array using the helper function `countItemsInsideArray`.

### Test 2 (Line 23)
Function: Tests `randomInt` 1000 times to determine whether the helper function correctly generates a random integer between `lowerBound` and `upperBound`.

### Test 3 (Line 31)
Function: Tests `shuffleArray` 1000 times on two different arrays to determine whether the helper function always returns a valid permutation of the array.

### Test 4 (Line 53)
Function: Tests `shuffleArray` 1000 times on an array to determine whether the helper function permutates the array at least once.

---

## File Name: previous-fortunes.test.js

**Verify Star Sign:** These are designed to test that given a month and day, the `getStarSign` function correctly returns the star sign corresponding to the month and day

### Test 1 (Line 13)
Function: Tests when Month = 4 and Day = 22, ♉ (Taurus) is returned.

### Test 2 (Line 17)
Function: Tests when Month = 2 and Day = 5, ♒ (Aquarius) is returned.

### Test 3 (Line 21)
Function: Tests when Month = 13 and Day = 39, null is returned since 13 and 39 are not valid options for Month and Day.

### Test 4 (Line 25)
Function: Tests when Month = 10 and Day = 22, ♎ (Libra) is returned.