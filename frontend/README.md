# MERN Stack Project

This project utilizes the following libraries (MySQL, Express.js, React.js, Node.js) to create a full-stack web application.

## Installation

### Frontend

1. Navigate to the frontend directory:
   
   cd frontend
   

2. Install dependencies:
   
   npm install
   

3. Start the frontend server:
   
   npm start
   

Note: If the backend URL port is changed, make sure to replace it in the frontend codebase where necessary.

### Backend

1. Navigate to the backend directory:
   
   cd backend
   

2. Install dependencies:
   
   npm install
   

3. Create database:
   
   DB name: adyastocks
   

3. Create tables or push from prisma Schema:
   
   npx prisma db push
   

3. Seed the sample stocks to database (optional):
   
   node prisma/seed.js
   

4. Start the backend server:
   
   npm run server
   

### Configuration

Before running the backend server, make sure to set up the .env file in the backend directory with the following configuration:


DATABASE_URL="mysql://root:@localhost:3306/adyastocks?schema=public"
PORT="3001"


---
