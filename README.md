# google-books-search

## Description
A React-based Google Books Search app utilising Node, Express and MongoDB so that users can save books to review or purchase later.

    Search - User can search for books via the Google Books API and render them here.
    Saved - Renders all books saved to the Mongo database. 

    Books result should display the following fields:
    * title - Title of the book from the Google Books API
    * authors - The books's author(s) as returned from the Google Books API
    * description - The book's description as returned from the Google Books API
    * image - The Book's thumbnail image as returned from the Google Books API
    * link - The Book's information link as returned from the Google Books API

    Express routes for app:
    /api/books (get) - Should return all saved books as JSON.
    /api/books (post) - Will be used to save a new book to the database.
    /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
    * (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

    Connect to a MongoDB database named "googlebooks" using the mongoose npm package. Using mongoose, create a Book schema.


## Development
* React
* MongoDB
* JavaScript ES6
* HTML5
* CSS3

## Directory
<img src="https://i.imgur.com/IaPlHLf.png" border="0" height="600" width="165">

## Demo
<img src="https://i.imgur.com/jAMw9j4.png" border="0">

## Deployment
https://hello-google-books.herokuapp.com/


<hr>

Kathy Chen | U of T Coding Bootcamp 2019
