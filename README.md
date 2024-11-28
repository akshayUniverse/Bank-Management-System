# Role-Based Access Control (RBAC) System

## Project Overview

### About This Project
This project is part of a larger system I am working on for a Bank Management System.
It demonstrates the implementation of Authentication, Authorization, and Role-Based Access Control (RBAC) to secure user data and manage access effectively.

### Frontend Development
The frontend of this project is built using HTML, CSS, and JavaScript. While React integration was started,
it hasn't been fully implemented yet, so the React files are currently unused in this version.

### Work in Progress
This project meets the assignment requirements but is still under development. Planned features include:
- Enhanced UI/UX for a better user experience.
- Token blacklisting for secure logout functionality.

---

## Features

### Authentication:
- Secure user registration and login.
- Passwords are hashed before being stored in the database for security.
- JWT is used to manage authentication sessions.

### Authorization:
- Role-based access ensures only authorized users can perform specific actions.
- By default, all users are assigned the **User** role during registration.

### Role-Based Access Control (RBAC):
- **Admins** can update the roles of other users.
- Restricted routes are accessible only to users with specific roles.
- Role validation prevents unauthorized access to protected resources.

### Logout Functionality:
- Users can securely log out through the UI.
- Sessions expire automatically after 15 minutes.

---

## How It Works

### 1. User Roles
- **Default Role**: All users are assigned the role of **User** upon registration.
- **Admin Role**: Users can only be assigned the **Admin** role manually by updating the database.

Admins have elevated privileges to manage roles and access protected endpoints.

### 2. Core Endpoints

| Endpoint                  | Method | Description                                 | Authorization       |
|---------------------------|--------|---------------------------------------------|---------------------|
| `/api/users/register`     | POST   | Registers a new user.                      | Public              |
| `/api/users/login`        | POST   | Logs in a user and returns a JWT token.    | Public              |
| `/api/admin/user/:id/role`| PUT    | Updates the role of a user.                | Admin only          |
| `/api/protected`          | GET    | Accesses a protected route.                | Depends on role     |

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_directory>
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the backend directory with the following variables:

makefile
Copy code
PORT=5000
DB_CONNECTION=mongodb+srv://<your_connection_string>
JWT_SECRET=<your_secret>
4. Start the Server
bash
Copy code
npm start
The server will run on http://localhost:5000 by default.

Testing the Project
Register a User
Endpoint: POST /api/users/register
Payload:
json
Copy code
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "testpassword"
}
Login
Endpoint: POST /api/users/login
Payload:
json
Copy code
{
  "email": "testuser@example.com",
  "password": "testpassword"
}
The response will include a JWT token to access protected routes.

Testing Admin Functionalities
To test admin features:

Log in with the following admin credentials:
makefile
Copy code
Username: RoleBasedAkshay
Email: rolebasedakshay@example.com
Password: Roleakshay123
Use the provided Admin token to access protected routes.
Security Best Practices
Password Hashing: User passwords are hashed using bcrypt before being stored in the database.
JWT Authentication: Secure token-based authentication ensures sessions are stateless.
Role Validation: Access to endpoints is restricted based on the user's assigned role.
Improvements
While the project meets the assignment requirements, future enhancements include:

Token blacklisting for secure logout and invalidation of tokens.
Using a third-party library for more granular RBAC (e.g., ACL or Casbin).

Thank you for exploring this project!
