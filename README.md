# React Application Template

This is a template for a React application that includes features like React Router with nested routes, a custom counter hook, error boundaries, and a 404 page. It also provides a basic CSS style for a clean user interface.

## Prerequisites

- Node.js and npm installed on my machine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Features
React Router with Nested Routes: Demonstrates how to set up nested routes using React Router.

Custom Counter Hook: Provides a reusable custom hook (useCounter) for managing counting functionality.

Error Boundary: Implements an error boundary component to catch and handle errors gracefully.

404 Page: Displays a custom 404 page for undefined routes.

### Project Structure
src/

components/: Reusable components used throughout the application.
hooks/: Custom hooks, such as the useCounter hook.
pages/: Individual pages of the application.
App.js: Main application component with route configurations.
index.js: Entry point of the application.
public/: Static assets and index.html file.

### How to Use
you are welcomed by the welcome page which consist of links to all other pages
Navigate to the Custom Counter page to see the custom hook in action.
It contain an app with increment and decrement of upto 5 and -5 and run an error if it is more than that.

Access non-existing routes to trigger the 404 page.

Visit the Error Boundary Test page by navigating to error page to test the error boundary.

Thanks and God bless.
