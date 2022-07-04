# Oystercard challenge (TypeScript)

While practising TypeScript, I revisited [a TDD challenge from the Makers Academy bootcamp](https://github.com/makersacademy/course/tree/main/oystercard) that we originally did in Ruby.

As a reminder to myself, follow these steps for setting up Jest to work with TypeScript:

* https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421

* add testPathIgnorePatterns: [".js"] to jest.config.js - so it doesn't test dist output as well

* command is npm test