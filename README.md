# Entain test from Rachel

This represents by attempt at the front end test. Please note a number of considerations:

* I have not used vue for nearly 3 years now. I have been using other frameworks in production (React, Flutter). I essentialy took this opportunity to crash-course learn vue on the fly in 1.5 session of coding.
* I have written the code myself. But I have used ChatGPT to help accelerate (as best as I can) the learning of vue on the fly. I leaned on what I understood of lifecycle methods, context state management from using React, Flutter to guide me. AI didn't write the code so there are mistakes still. I also used official docs such as vue.js, pinia and vitest as guidance.
* I don't have any test experiences
* I have ran out of stipulated time for the exercise. I would have liked to do more
* I can probably speak more to this problem from a React perspective.
* I use scss in production and this current structure (including the basic reset) represents my usual preferred working style. I can use other utility frameworks like tailwind, material as needed.

## Briefly implementation

The store is intended to be the single source of truth to hold, parse and transform data on the basis of timestamp.

It is unclear from instructinos whether even if applying filter should mean five races should also always remain on screen.

I amended the pagination count in the provided api endpoint to 5 to align with instructions that 5 items is required, but that isn't aboslutely necessary.

I chose date-fns to assist in evaluating unixtime and comparison as I have used that in my current role.

Key considerations I would like to avoid:
* unnecessary re-renders of components (even if it's the timer)
* calling the api endpoint too many times unnecessarily

## Future implementation

If more time allows would like to look at:

* more consistent application of typescript across all files
* look into why path urls are not resolving correctly from vite.config.ts so that I can use `@/` to refer to files.
* look into a wrapper to retry the api appoint in thec ase of network or platform failures
* explore pagination potentially

I want to keep as close possible to the stipulated time. But this attempt does represent my re-learning vue on the fly again.

Not my best work, but appreciate the opportunity to have a go.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run start // runs on port 8080
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
