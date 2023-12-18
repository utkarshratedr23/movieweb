# What is the use of this Repo
  MovieWeb is a modern web application designed to provide users with a seamless experience for discovering and exploring information about movies,tv shows & others. Whether you're a 
  cinephile looking for details on your favorite films or a casual viewer in search of new recommendations, MovieWeb has you covered.
  This project is a Responsive React movie web app which demonstrates the following:
  1.Creating various components in React.
  2.Fetching data from movie web available on internet through private key/tokens.
  3.Communicating between parent & child components via props.
  4.Using Redux & Redux toolkit for managing applications state in an efficient & scalable manner.
  5.Using SCSS & material UI of react along with react.

 # Live application URL
   <a href="https://movieweb-hvly-utkarshratedr23.vercel.app/"> Click Here </a>

 # Prerequisites  
   Before using MovieWeb, ensure you have the following prerequisites:

  - Node.js installed
  - npm (Node Package Manager) installed
  - Install create-react-app

 # Application design:
  Components:
   1.Headers:The "Header" React component manages the header section of a movie or TV show-related web application. It includes features such as dynamic header visibility on scroll, 
     navigation links for Movies and TV Shows, a search bar with query functionality, and a responsive mobile menu. The component employs state management, event listeners, and 
     conditional rendering to enhance the user experience in both desktop and mobile views.
     
   2. Home:The "Home" React component represents the main page of a web application, incorporating sections for a hero banner, trending content, popular items, and top-rated selections. 
    It utilizes modular components for each section to maintain a clean and organized structure. The component is styled using a dedicated SCSS file for consistent and visually appealing 
    presentation.

   3.Carousel:The "Carousel" React component is designed for displaying a horizontally-scrollable carousel of items, such as movies or TV shows. It includes navigation arrows, lazy- 
   loaded images, and information about each item, including title, release date, and rating. The component is dynamic, fetching data based on the provided props, and includes a loading 
   skeleton for a smooth user experience during data retrieval. The layout is structured using modular components for improved maintainability.

   4.CircleRating:This React component, named CircleRating, renders a circular progress bar using the "react-circular-progressbar" library. It takes a 'rating' prop to determine the 
   progress value, with a maximum value of 10. The color of the progress bar changes based on the rating, with red for ratings below 5, orange for ratings between 5 and 7, and green for 
   ratings above 7. The component is styled using a CSS file ("style.scss").

   5.MovieCard:This React component, MovieCard, represents a card displaying information about a movie or TV show. It receives data, whether from a search or other source, along with 
   details like media type. It uses the "react-redux" and "react-router-dom" hooks for state management and navigation, respectively. The card includes a poster image, rating circle, 
   genre tags, title, and release date. Clicking on the card navigates to the detailed view of the corresponding media item. Styling is applied through a "style.scss" file, and a 
   fallback poster is used if the poster_path is not available.

   6.Spinner:This React component, Spinner, renders a loading spinner with optional initial styling. It utilizes an SVG element to create a circular path with a specified radius and 
   stroke width. The "style.scss" file contains additional styling for the spinner. The component is configurable with a prop 'initial' to apply a specific style when set to true.

   7.SwitchTabs:This React component, SwitchTabs, creates a tab-switching interface. It takes an array of tab data and a callback function for tab changes. State is managed for the 
    selected tab index and the position of a moving background element. Clicking on a tab updates the selected tab, triggers a moving animation, and calls the provided callback. The 
   "style.scss" file contains styling for the tab interface.

   8.VideoPop:This React component, VideoPopup, represents a popup for displaying YouTube videos. It takes props for controlling its visibility, handling closure, and specifying the 
   YouTube video ID. The popup includes an overlay that can be clicked to close it, a close button, and a ReactPlayer component for rendering the YouTube video with playback controls. 
   Styling is applied through the "style.scss" file.

   9.UseFetch:This custom React hook, useFetch, facilitates data fetching from an API. It takes a URL as a parameter and manages state for the fetched data, loading status, and potential 
    errors. The hook uses the useEffect function to initiate the data fetching process when the URL changes, updating the state accordingly based on the API response or any encountered 
    errors.

   10.HomeSlice:This code defines a Redux slice named "home" using the createSlice utility from "@reduxjs/toolkit". The slice manages the state for API configurations (url) and genres. 
    It includes two reducers, "getApiConfiguration" and "getGenres," which update the state based on the provided payload. Action creators, such as getApiConfiguration and getGenres, are 
    automatically generated, and the slice reducer is exported for use in the Redux store.

   11.Footer:This React component, Footer, represents a website footer. It includes a ContentWrapper for layout consistency and contains menu items, information text, and social icons. 
   The menu items list covers aspects like terms of use, privacy policy, about, blog, and frequently asked questions. The information text provides a brief description, and social icons 
   for Facebook, Instagram, Twitter, and LinkedIn are displayed using corresponding React icons. Styling is applied through the "style.scss" file.



# Awesome API

## Overview

Awesome API is a powerful and easy-to-use API that provides access to a vast array of cool features.

## Getting Started

### Installation

npm install axios
### Usage

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = process.env.TMBD_TOKEN;

### License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to contribute and improve this module!


 Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
