# memory-card

A browser-based memory game built with React.
The objective is to select unique cards without repeating a previous selection.

## Live Demo

[View live page](https://memory-card-kappa-blush.vercel.app)

## Overview

The application consists of two primary scenes:

- Menu – difficulty selection and game start
- Gameplay – interactive card grid with scoring and game state handling

## Core Capabilities

- Multiple difficulty levels (4, 8, 12 cards)
- Card shuffle after every selection
- Score and high score tracking
- Game over detection on repeated selection
- Victory condition on full unique selection
- Modal-based feedback system

Game state is managed using React hooks, with scene resets handled via keyed re-mounting.

## Tech

- React
- JavaScript
- CSS
- DiceBear API

## Run Locally

Clone the repository and install dependencies.

```bash
git clone https://github.com/Sai-Eshwar-Supreet/memory-card.git
cd memory-card
npm install
npm run dev
```

Open the local server shown in the terminal.

## Deployment

- The project is deployed using Vercel.
- Every push to the main branch automatically triggers a new deployment.

## Acknowledgements

- This project was completed as part of **[The Odin Project – React Course](https://www.theodinproject.com/)**
- Avatars generated via **[DiceBear](https://www.dicebear.com/)**
