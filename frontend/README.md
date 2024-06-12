# Book Assignment

This repository contains the frontend code for book assignment. An online version is available at: <https://frontend-ello.vercel.app/>

## Project Structure

The project is structured as follows:

- **src**: Contains the main source code for the application.
    - **App.tsx**: The main component of the application, responsible for rendering the entire UI.
    - **components**: Contains reusable UI components.
        - CallToAction.tsx: Displays a call-to-action banner with an image, title, description, and button.
        - Navbar.tsx: Renders the navigation bar for the application.
        - Books.tsx: Displays a list of books.
        - Footer.tsx: Renders the footer of the application.
    - **context**: Contains context providers for managing application state.
        - ReadingListContext.tsx: Provides context for managing the user's reading list.
    - **theme**: Contains the application's theme configuration.
        - theme.ts: Defines the theme using Material UI's ThemeProvider.
    - **assets**: Contains static assets used by the application.

## Running the Application

To run the application, follow these steps:

1. Install the dependencies in both `backend` and `frontend` folders using ```npm install```
2. Start the backend server by running ```npm start```
3. Start the frontend server by running ```npm run dev```

The frontend application will be accessible at <http://localhost:5173>.

## Features

The frontend currently implements the following features:

- **Navigation bar**: Provides dummy links to different sections of the application and also includes an icon that opens the reading list drawer.
- **Call-to-action banner**: Displays a visually appealing banner with information about Ello or any book that might be featured.
- **Book list**: Displays a list of books available for reading.
- **Reading list drawer**: Allows users to manage their reading list.