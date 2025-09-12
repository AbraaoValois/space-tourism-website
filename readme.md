# Frontend Mentor - Space Tourism Website Solution

This is a solution to the [Space Tourism Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). This project helps improve frontend skills by building a realistic, multi-page website with responsive design, interactive elements, and modular code.

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size.
- See hover states for all interactive elements.
- Toggle between tabs to view new information.
- Navigate between multiple pages (Home, Destination, Crew, Technology).

### Screenshot

_Add a screenshot of your project here, e.g.:_  
![](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/AbraaoValois/space-tourism-website)
- Live Site URL: _Add your GitHub Pages or other live link here_

## My Process

### Built With

- HTML5 semantic markup
- SCSS (Sass) for styling and componentization
- JavaScript (ES6) for interactivity
- Flexbox & CSS Grid
- Mobile-first workflow
- Git & GitHub for version control

### What I Learned

So far, this project helped me:

- Organize a project with **componentized SCSS** (`base`, `layout`, `components`, `pages`, `utils`) for better maintainability.
- Structure a multi-page website with **separated HTML files** in a dedicated `html/` folder.
- Create modular JavaScript for interactive features like tabs and navigation.
- Use GitHub to manage commits and version control step by step.

```scss
// Example SCSS import structure
@use 'utils/variables';
@use 'utils/mixins';
@use 'base/reset';
@use 'base/typography';
@use 'layout/header';
@use 'components/buttons';
