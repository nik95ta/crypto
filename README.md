# Crypto List

React-Powered Cryptocurrency List and Bitcoin Address Generator

## Technologies Used

- React + Next 13
- Redux + Redux Toolkit
- styled-components
- TypeScript
- bs58 + elliptic
- Jest and Testing Library

## My Decisions :pencil:️

**Refactoring**
I decided to refactor this project and have committed this refactored version with the following changes:

- Moved meta HTML tags to `_document.page.tsx`
- Fixed a typo in `pages/api/tokens.page.ts`
- Added names for coins in another language
- Corrected the `NavBar` component name
- Removed unused code

**Features added**

- Generating public and private Bitcoin addresses using the `bs58` and `elliptic` packages
- Displaying a list of selected tokens upon initially opening the manage page
- Implemented debouncing for searches using a custom hook
- Enabled searching by Persian names
- Utilized Redux Toolkit for enhanced management of the list of selected tokens
- Added a fixed footer for the manage token button
- Added some unit tests

## Areas for Improvement :hourglass:

- Enhancing the UX for an empty list to be more user-friendly
- Adding a clear button for the search input for improved usability
- Implemented additional tests to improve code coverage
- Optimizing styles

## Available Scripts :rocket:

In the project directory, you can run:

### `yarn`

Install all dependencies.

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner.\


