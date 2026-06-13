# 🌍 African Flags Flashcards

# Web Development Project 2 - African Flags Flashcards

Submitted by: **Mohamed Alie Conteh**

This web app: **An interactive flashcard app that helps users learn African countries by identifying their flags. Each card shows a flag on the front, and when clicked, it flips to show the country name, capital city, independence date, and region.**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] **The app displays the title of the card set, a short description, and the total number of cards**

  * [x] Title of card set is displayed
  * [x] A short description of the card set is displayed
  * [x] A list of card pairs is created
  * [x] The total number of cards in the set is displayed
  * [x] Card set is represented as a list of card pairs
* [x] **A single card at a time is displayed**

  * [x] Only one half of the information pair is displayed at a time
* [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**

  * [x] Clicking on a card flips it over, showing the back with corresponding information
  * [x] Clicking on a flipped card again flips it back, showing the front
* [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

* [x] Cards contain images in addition to or in place of text

  * [x] Cards display country flag images
* [x] Cards have different visual styles such as color based on their category

  * [x] Cards are color-coded by African region: North, West, East, Central, and Southern Africa

The following **additional** features are implemented:

* [x] Added card shadow styling
* [x] Added hover transformation effects
* [x] Added smooth visual styling for a more attractive flashcard experience
* [x] Added arrow-style navigation buttons

## Video Walkthrough

Here's a walkthrough of implemented required features:

GIF created with **ScreenToGif**.

## Notes

One challenge I encountered was making sure the image file names matched the import statements exactly because React/Vite is case-sensitive. I also had to separate the logic in `App.jsx` from the display component in `card.jsx` so the flashcard could flip correctly and show a random card.

## License

```
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
```
