# Learning React Hooks

## Lab Prep

- Clone the lesson repo into your Training Directory with `git clone https://github.com/wrburgess/react-hooks-lesson` (public) or `git clone git@github.com:wrburgess/react-hooks-lesson.git` (ssh)
- Set your terminal to the new directory with `cd react-hooks-lesson`
- Install the necessary packages with `npm install` or `npm i`
- Open your editor in the directory with VS Code `code .` or Sublime `subl .`
- In your terminal, make sure your local server is running with `npm run start`
- In your terminal, make sure your tests are working with `npm run test`. Press `a` to run all tests, if asked.

## Goal

- Learn about React Hooks and how it can streamline React development.
- Refactor the Bottom Component from a React Class Component to a React Function Component using the `useState` hook.

## Lab

### Steps

1. Make sure your tests are passing with `npm run test`
2. Open the file: `src/components/Bottom.js`
3. Import the React and Hook methods
4. Convert the Bottom Class Component to a Function Component
5. Initialize state with the useState hook
6. Switch the results section from an explicit to implicit state variable
7. Edit the `handleClick` function to increment the widgetsCount value using the hook
8. Run your tests and check the UI

### Steps (with hints)

1. Make sure your tests are passing with `npm run test`
2. Open the file: `src/components/Bottom.js`
3. Import the `React` and `useState` methods from the `react` module (see `src/components/LeftSide.js`, line 1)
4. Convert the Bottom Component from a class component to a function component (see `src/components/LeftSide.js` line 3, `RightSideRefactored.js` line 3)
5. Edit the Bottom Component to initialize state with the useState hook (see `src/components/RightSideRefactored.js`, line 4)
6. Edit the results section to use a component variable without the `this` reference (see `src/components/RightSideRefactored.js`, line 13)
7. Edit the `handleClick` function to increment the widgetsCount value using the hook (see `src/components/RightSideRefactored.js`, line 14)
8. a) Make sure your tests are passing with `npm run test`
9. b) Make sure your refactoring works for users with `npm run start`

## Slides

- [react-hooks-lesson-slides](https://github.com/wrburgess/react-hooks-lesson/blob/master/react-hooks-lesson-slides.key) and click `Download`

## Other Resources

- [reactjs.org - Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [testdriven.io - Primer on React Hooks](https://testdriven.io/blog/react-hooks-primer/)
- [css-tricks - Intro to React Hooks](https://css-tricks.com/intro-to-react-hooks/)

## Tools Used

- [Create React App - setup/bundling](https://github.com/facebook/create-react-app)
- [Jest - testing](https://jestjs.io/)
- [React Testing Library - test helper](https://github.com/kentcdodds/react-testing-library)
