
# The Making!
This application is built using the coolest tools:
  - React
  - Redux
  - Css-in-js (styled-components)
  - Redux Saga
  - Webpack
  - React-Router

### Task 1
- Had to set up a Webpack configuration that bundles the app for the browser.
 - To ease development, had to ensure there was a development server with hot reloading to update new changes.

### Task 2
 - Setting up different views with React Router with links to navigate between them
  - Client-side routing is one of the beauties of SPAs and ensures easy management of route parameters as well.
  
### Task 3
  - The History view pulls data from the API when the page renders.
  - For extra benefit, I want to check that the page only makes a request for data only if there is no data in the store
  
### Task 4
  - The Launches page is a bit more interesting, the view pulls in a huge amount of unpaginated data.
  - To help with performance, I would like to build a custom hook to make client-side pagination possible.
  - Creating the filters for the launches is quite interesting too. Data came in different shapes with some fields with null values.
  - I implemented simple filtering to filter launches by name and year of launch fields of each launch
  
### Task 5
  - I pulled out a list of possible orbits by digging through the rockets data to assemble a list.
  - Several fields of the rockets data suggested the possible orbits for that rocket, however, I settled to go with the orbit field of the launch's payload because I believe that had the closet correlation with the orbit the rocket can reach.
  
### Task 6
  - I created a modal using React createPortal method. Using refs, I remove the modal when unmounted to ensure that there is only one Modal component at any time.
  - The user is also able to select a data field to send to an imaginary endpoint.
