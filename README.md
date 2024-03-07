# Blog 
This is a MERN Stack apllication with a REST API and a sample front-end.

## Why ?
I wanted to apply my new knowledge by building this project. In the future i intend to build a complete blog website to share information with foreign students in Morocco.

## Technologies used:
### Frontend:
1. REACT JS / REACT Router
1. Interface style by pure css
1. Axios for the API call
1. React Quill

### Backend:
1. NodeJS/ Express
1. MONGODB 
1. bcryptjs to hash users password before storing them
1. jsonwebtoken package to generate a json web token for user authentication purposes
1. mongoose to interact with MongoDB database
1. Multer to handle multipart/form-data 
1. dotenv to access the environment variables
1. express-async-errors to handle errors instead of using try-catch
1. cors to enable CORS 

## All available routes
### User (reader or writer)

``` 
fields:
{
    _id: String,
    username: String,
    email: String,
    password: String,
    role: String,
}
```
#### GET

#### POST
* /api/v1/users/register (register a reader or a writer)
* /api/v1/users/login (login)
* /api/v1/users/logout (logout)

#### PATCH
* /api/v1/users/update (update user informations)

#### DELETE
* /api/v1/users/delete (delete user)


### Blog Posts

``` 
fields:
{
    _id: String,
    title: String,
    summary: String,
    cover: String,
    content: String,
    author: String,
    created_at: Date,
    updated_at: Date,
}
```
#### GET
* /api/v1/posts/ (get all posts)
* /api/v1/posts/:id (get a single post)

#### POST
* /api/v1/posts/ (post a new post)

#### PATCH
* /api/v1/posts/:id (update a post)

#### DELETE
* /api/v1/posts/:id (delete a post)