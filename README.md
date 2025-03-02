# mern-recipe-backend

Here’s a step-by-step breakdown of the backend process for the Recipe Sharing Platform:  

1. **Initialize the Backend**  
   - Set up a Node.js project using `npm init`.  
   - Installed necessary dependencies: **Express, Mongoose, dotenv, CORS, bcrypt.js, jsonwebtoken (JWT)**.  
   - Created a `.env` file for storing sensitive information like the MongoDB connection string.  

2. **Set Up Database (MongoDB)**  
   - Created a **MongoDB database** using MongoDB Atlas.  
   - Connected the backend to MongoDB using **Mongoose**.  

3. **Created Models**  
   - Set up a **User model** with fields: `username`, `email`, `password`, and `savedRecipes`.  
   - Implemented password hashing using **bcrypt.js** before storing user credentials.  
   - Created a **Recipe model** to store recipe details, including `name`, `description`, `image`, and `steps`.  

4. **Implemented Authentication**  
   - Developed **user authentication routes** (`register` and `login`) using Express.  
   - Used **JWT (jsonwebtoken)** to generate secure authentication tokens.  
   - Created middleware to verify JWT tokens and protect certain routes.  

5. **Developed API Routes**  
   - Created **recipe routes** to allow users to create, read, update, and delete recipes.  
   - Implemented a route to fetch saved recipes for authenticated users.  

6. **Testing API Functionality**  
   - Used **Postman** to test all API endpoints.  
   - Verified user authentication, recipe creation, and data retrieval.  

7. **Handled CORS and Security**  
   - Configured **CORS** to enable frontend-backend communication.  
   - Used environment variables (`.env`) to secure database credentials.  

8. **Prepared for Deployment**  
   - Considered deploying the backend on **Render or AWS**.  
   - Ensured environment variables were properly configured for production.  

The backend is now fully functional, supporting user authentication, recipe management, and secure API interactions.
