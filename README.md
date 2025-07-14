*** 1. Source Code***

```bash
Copy
Edit
brynk-labs-assignment/
├── client/         # React Frontend (with Vite)
└── server/         # Node.js + Express Backend
```


*** Project Setup ***
```bash
# Frontend
cd BrynkLabs-company-website
npm install
npm run dev

# Backend
cd BrynkLabs-backend
npm install
node index.js

```
or

open link:https://brynklabs.onrender.com  or system localhost.

make an api call  "/cms" in the search bar to navigate for CMS heading updation page.
click on home page for navigating to landingpage.

*** Dependencies ***
Frontend: React, Vite, React Router DOM, Context API

Backend: Express, MongoDB, Mongoose, dotenv, cors

*** Environment Variables ***
```bash

# .env (backend)
MONGO_URI=your_mongo_connection_string
PORT=3000
```

***🔹 API Endpoints***

GET	     :/api/heading	 (Fetch current heading)
POST	 :/api/heading	 (Update heading text)


 *** API Documentation***


# GET /api/heading

Response: { heading: "Current heading text" }

# POST /api/heading

Body: { heading: "New Heading" }

Response: { message: "Heading updated" }