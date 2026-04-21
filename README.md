# Authentication System - Next.js + MongoDB

A simple authentication system built with Next.js (App Router), MongoDB, Mongoose, bcrypt, Server Actions, and cookies.

## Features

- Signup with hashed passwords
- Login with session cookies
- Protected dashboard route
- Logout with full session clear
- Duplicate email prevention
- Loading states on forms

## Tech Stack

- Next.js (App Router)
- MongoDB + Mongoose
- bcrypt
- Server Actions
- Cookies for session handling

## Setup

1. Install dependencies

```
npm install
```

2. Add a `.env.local` file

```
MONGODB_URI=mongodb://localhost:27017/auth_system
```

3. Run the dev server

```
npm run dev
```

Open http://localhost:3000 in the browser.
