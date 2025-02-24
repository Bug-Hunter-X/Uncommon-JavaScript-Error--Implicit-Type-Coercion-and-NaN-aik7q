# Uncommon JavaScript Error: Implicit Type Coercion and NaN

This repository demonstrates a subtle JavaScript error related to implicit type coercion and the production of `NaN` (Not a Number).

## The Bug

The `foo` function in `bug.js` aims to add two numbers. However, it lacks robust type checking. If either `a` or `b` is not a number (e.g., a string or boolean), JavaScript's implicit type coercion will lead to unexpected results, often producing `NaN`.

## The Solution

The `bugSolution.js` file offers a corrected version of the `foo` function.  It explicitly checks the type of the inputs using `typeof` and handles non-numeric inputs gracefully, preventing the generation of `NaN` and ensuring the function operates as intended. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run `bug.js` using Node.js (or a similar JavaScript environment).
4. Observe the unexpected behavior (NaN output) with non-numeric inputs.
5. Run `bugSolution.js` to see the corrected behavior.