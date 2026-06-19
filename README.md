🌍 African Flags Flashcards
# Web Development Project 3 - African Flags Flashcards

Submitted by: **Mohamed Alie Conteh**

This web app: **An interactive flashcard application that helps users learn African countries by identifying their flags. Users can guess the country before flipping the card, track their streaks, shuffle cards, and mark mastered countries while learning capitals and independence dates.**

Time spent: **5 hours spent in total**

## Required Features

The following **required** functionality is completed:

* [x] **The user can enter their guess into an input box before seeing the flipside of the card**

  * [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  * [x] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
  * [x] Clicking on the submit button with a correct answer shows visual feedback that it is correct

* [x] **The user can navigate through an ordered list of cards**

  * [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  * [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  * [x] Both the next and back buttons have visual indications when the user is at the beginning or end of the list and prevent wrap-around navigation

## The following **optional** features are implemented:

* [x] Users can use a shuffle button to randomize the order of the cards

  * [x] Cards remain in the same sequence unless the shuffle button is clicked
  * [x] Cards change to a random sequence when the shuffle button is clicked

* [x] A user’s answer may be counted as correct even when it is slightly different from the target answer

  * [x] Answers are checked without regard to uppercase/lowercase differences
  * [x] Answers are checked using normalized text comparison
  * [x] Partial matches are accepted for some country names

* [x] A counter displays the user’s current and longest streak of correct responses

  * [x] Current streak increases after each correct answer
  * [x] Current streak resets after an incorrect answer
  * [x] Longest streak is tracked throughout the session

* [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

  * [x] Users can mark cards as mastered
  * [x] Mastered cards are removed from the active card pool
  * [x] A mastered card count is displayed

## The following **additional** features are implemented:

* [x] African countries grouped by region (North, West, East, Central, and Southern Africa)
* [x] Color-coded flashcards based on region
* [x] Country flag images displayed on each card
* [x] Capital cities displayed on the answer side
* [x] Independence dates displayed on the answer side
* [x] Attractive card styling with shadows and hover effects
* [x] Data separated into a dedicated `cards.js` file for improved maintainability

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="C:\Users\conte\OneDrive\Desktop\Codepathfiles\Web102\west-african-flashcards\src\assets\Walkthrought2.gif" />

GIF created with **ScreenToGif**

## Notes

One challenge encountered during development was organizing a large number of African country flags and ensuring image imports matched the exact file names because React and Vite are case-sensitive. Another challenge was separating application logic from data by moving all card information into a dedicated data file, making the code easier to maintain and scale. Implementing streak tracking, card mastery, and answer validation also required careful state management using React hooks.

## License

Copyright 2026 Mohamed Alie Conteh

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

