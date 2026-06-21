# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview production build locally
npm run lint      # run ESLint
```

There are no tests in this project.

## Architecture

This is a React 19 + Vite flashcard app themed around coffee drinks.

**Data flow:** The card deck is a plain array of `{question, answer}` objects defined at the top of [src/App.jsx](src/App.jsx). There is no external data source or state management library — all state lives in React `useState`.

**Random card logic:** `generateRandomIndex()` in `App.jsx` uses a module-level `Set` (`visited`) to avoid repeating cards until the full deck has been seen, at which point it resets. `startingPoint` and the initial `visited.add()` are also at module scope so they survive re-renders.

**Flip mechanic:** `Flashcard.jsx` holds a single `isFlippedToBack` boolean state. The CSS in [src/App.css](src/App.css) drives the 3D flip — `.inner` uses `transform-style: preserve-3d` and `transition: transform 0.8s`, `.flipped` applies `rotateY(180deg)`, and both `.front`/`.back` use `backface-visibility: hidden`. Toggling the `flipped` class on `.inner` is how the flip is triggered; the component itself only manages that class toggle.

**Component boundary:** `App` owns the current card index and navigation; `Flashcard` owns only its own flip state and receives `question`/`answer` as props.
