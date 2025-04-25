# 🧪 **Prisma Practice Assignment: Build a Simple Blog API**

## 🔧 **Tech Stack**
- Node.js + Express
- Prisma ORM
- SQLite (for simplicity, but feel free to use PostgreSQL or MySQL if you want)
- Postman or Thunder Client for testing the API

---

## 📋 **Assignment Description**
Create a basic blog API that supports:
- User registration and login
- Posting articles
- Commenting on articles
- Retrieving data with relations

---

## 🧱 **Database Schema**
Here's what your models should roughly look like:

### `User`
- `id` (String, @id, @default(cuid()))
- `email` (String, @unique)
- `name` (String)
- `password` (String)
- `posts` (relation to `Post`)
- `comments` (relation to `Comment`)

### `Post`
- `id` (String, @id, @default(cuid()))
- `title` (String)
- `content` (String)
- `published` (Boolean, default: false)
- `authorId` (String)
- `author` (relation to `User`)
- `comments` (relation to `Comment`)
- `createdAt` (DateTime, @default(now()))
- `updatedAt` (DateTime, @updatedAt)

### `Comment`
- `id` (Int, @id, @default(autoincrement()))
- `text` (String)
- `postId` (String)
- `authorId` (String)
- `post` (relation to `Post`)
- `author` (relation to `User`)
- `createdAt` (DateTime, @default(now()))
- `updatedAt` (DateTime, @updatedAt)

---

## 📌 **Tasks**

### 🛠 Setup
- Initialize a new Node.js project
- Install Prisma and create schema
- Migrate DB and generate Prisma client
- Set up Express server

### ✅ CRUD Features

#### Authentication
- [x] Login
- [x] Sign Up

#### Users
- [x] Create a new user
- [x] Get all users
- [x] Get a single user with all their posts and comments

#### Posts
- [x] Create a new post by a user
- [x] Publish/unpublish a post
- [x] Get all posts (with optional filter for published)
- [x] Get a single post with all comments

#### Comments
- [x] Create a comment on a post
- [x] Get all comments on a post
- [x] Delete a comment

---

## 🚀 **Bonus Challenges**
- [x] Add JWT-based user authentication
- [x] Only allow users to edit/delete their own posts/comments
- [ ] Add pagination to posts/comments
- [x] Add updatedAt timestamps and return posts/comments ordered by latest

---

## 🧠 **Learning Goals**
- Understand and use Prisma schema modeling
- Practice CRUD operations using Prisma Client
- Query nested relations
- Work with filters and conditions in Prisma queries
- Learn Prisma Migrate and how to evolve your database

## 🌐 **Postman Collection**
You can use the following Postman link to test the API:  
[Postman Collection](https://planetary-astronaut-69182.postman.co/workspace/My-Workspace~f3743a0e-fb88-4684-8f67-dc586dc8e546/collection/26737462-d8c8017e-f863-43c1-8f03-0f889703e1bd?action=share&creator=26737462&active-environment=26737462-eaeadd56-da55-4fb2-b72b-db5334c80411)