# Web Development Project 2 & 3: **Coffee Break Study - Extended**

Submitted by: **Phillipe Manio**

This web app: A flashcard studying web application designed to test coffee newcomers, experts, and lovers on the correct build of certain coffee drinks.

Time spent:
- **4** hours spent in total (Project 2)
- **3** hours spent in total (Project 3)

## Required Features

The following **required** functionality is completed:

Project 2 **required** functionality:
- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
- [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on a card flips it over, showing the back with corresponding information 
  - [X] Clicking on a flipped card again flips it back, showing the front
- [X] **Clicking on the next button displays a random new card**


Project 3 **required** functionality:
- [X] **The user can submit a guess into an input box before seeing the flipside of a card**
  - [X] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [X] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
  - [X] Clicking on the submit button with a correct answer shows visual feedback that it is correct

- [X] **The user can navigate through an ordered list of cards**
  - [X] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [X] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [X] Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

Project 2:
- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

Project 3:
- [X] **Users can use a shuffle button to randomize the order of the cards**
  - [X] Cards should remain in the same sequence (NOT randomized) unless the shuffle button is clicked
  - [X] Cards should change to a random sequence once the shuffle button is clicked
- [ ] **A user’s answer may be counted as correct even when it is slightly different from the target answer**
  - [ ] Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [ ] **A counter displays the user’s current and longest streak of correct responses**
  - [ ] A current counter increments when a user guesses an answer correctly
  - [ ] The current counter resets to 0 when a user guesses an answer incorrectly
  - [ ] A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter
- [ ] **A user can mark a card that they have mastered and have it removed from the pool of displayed cards**
  - [ ] The user can mark a card to indicate that it has been mastered
  - [ ] Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

* [] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features (Project 2):
https://youtu.be/2hxEskDQ158

(Project 3):
https://youtu.be/EooW0zHpTXU


Describe any challenges encountered while building the app.

**In Project 2, the biggest challenge while building the app was implementing the flip feature and creating a 3D space. Using the reference provided for us from W3Schools on how to create a card flip, this example used a flip on a hover while we needed to use states and a button click to call for the card flip, so I would've had to adjust to that. I used a ternary operator to add the 'flipped' class to the inner HTML element to somewhat enigneer the flip mechanic.**

**In Project 3, I'd say a challenge I faced was figuring out how to shuffle the list of cards, since it's immutable due to the const declaration. However, I rerouted to using a state, where I used a spread operator and have it shuffled every time deck state is set.**

**Another challenge was when the Previous or Next card buttons were clicked while on the back side, the card would show the answer for the new card before slowly flipping back to the front side. I had to adapt to using a setTimeout() function to speed up the overall card flip animation. This helped flip back to the front side when the user wants to click to the previous or next card, while looking at the back side of a card without having the answer revealed for the next card.**

## License

    Copyright 2026 Phillipe Manio

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
