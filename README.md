# Book API Documentation

This is a RESTful API built with **Node.js**, **Express**, and **MongoDB**. The API allows you to manage a collection of books, including operations like adding, updating, deleting, and retrieving books.

# Book API Documentation

# DEPLOYMENT #
You can access the link to the deployed API on Render through the link below:

https://books-api-y2k0.onrender.com

## Postman Collection

You can download the Postman collection for the Book API from Google Drive:
- [Download Postman Collection from Google Drive](https://drive.google.com/file/d/1clJG0qFYGgWx-BWdwkPqkLIkhbYHIR2b/view?usp=sharing)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [API Endpoints](#api-endpoints)
4. [Example Requests](#example-requests)
5. [Error Handling](#error-handling)

## Project Overview
This API allows you to:
- **Create** a new book entry.
- **Read** all books or a specific book by ID.
- **Update** an existing book.
- **Delete** a book by ID.

## Setup Instructions

### Prerequisites
- **Node.js**: Version 14.x.
- **MongoDB**: A running MongoDB.

### Installation Steps

   create a folder
   cd folder on terminal
   create express server
   initialize project (npm init)
npm install express
Create entry point (index.js) 
Configure Express Application In index.js file an Entry Point (index.js) 
 start up server with node index.js
 set up environment variables (.env) by running npm install dotenv
 add the folowing to the .env file 
 MONGO_URI=
PORT=3000

## API Endpoints
1. GET /api/books
Description: Fetch all books in the database.

Response:
Status: 200 OK
Body: A list of books.
json
command:http://localhost:3000/api/books
note:it doesnt have body
[
  {
    "_id": "12345",
    "title": "Book Title",
    "author": "Author Name",
    "genre": "Comedy"
  },
  {
    "_id": "67890",
    "title": "Another Book",
    "author": "Another Author",
    "genre": "Horror"
  }
]

2. GET /api/books/:id
Description: Fetch a book by its ID.

Parameters:

id (Path Parameter): The ID of the book.
Response:

Status: 200 OK (if book found)
command:http://localhost:3000/api/books/ID
{
  "_id": "12345",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Comedy"
}

3. POST /api/books
Description: Create a new book.

Request Body:

title: The title of the book (required).
author: The author of the book (required).
genre: The genre of the book (required; one of "Comedy", "Romance", "Tragedy", "Horror").
Example Request:
{
  "title": "New Book",
  "author": "New Author",
  "genre": "Romance"
}

4. PUT /api/books/:id
Description: Update a book by its ID.

Parameters:

id (Path Parameter): The ID of the book to update.
Request Body:

title (optional): The title of the book.
author (optional): The author of the book.
genre (optional): The genre of the book.
Example Request:
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "genre": "Tragedy"
}

5. DELETE /api/books/:id
Description: Delete a book by its ID.

Parameters:

id (Path Parameter): The ID of the book to delete.
Response:

Status: 200 OK (book is deleted)
Body: { "message": "Book deleted successfully" }

Example Requests
GET /api/books
Request:
bash
Copy code
GET http://localhost:5000/api/books
Response (200 OK):
json
Copy code
[
  {
    "_id": "abc123",
    "title": "Sample Book",
    "author": "Sample Author",
    "genre": "Comedy"
  }
]


## Error Handling
The API returns appropriate error codes and messages in case of failure:

400 Bad Request: When required fields are missing or the data is invalid.
404 Not Found: When the requested resource (book) does not exist.
500 Internal Server Error: When there is an issue on the server side.
For example, a request to a non-existing book ID will return:

json
Copy code
{
  "message": "Book not found"
}


## Conclusion
This API provides CRUD operations for a Book resource using Express and MongoDB. It allows you to create, read, update, and delete books from your database. The routes are easy to follow, and the setup steps are straightforward.