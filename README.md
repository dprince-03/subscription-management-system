# Subscription Management System

## Overview
This project is a backend subscription management system built with Node.js and Express. It provides user authentication, subscription tracking, and automated renewal reminder workflows. The system integrates with MongoDB for data storage and uses Upstash Workflow for scheduling and sending subscription renewal reminder emails.

## Features
- User authentication and authorization
- Subscription creation and retrieval per user
- Automated subscription renewal reminders sent via email
- Workflow orchestration using Upstash Workflow
- Email notifications using Nodemailer
- Secure password hashing with bcrypt
- JSON Web Token (JWT) based authentication
- Environment configuration with dotenv

## Technology Stack
- Node.js (ES Modules)
- Express.js
- MongoDB with Mongoose
- Upstash Workflow
- Nodemailer
- bcrypt
- JSON Web Tokens (JWT)
- dotenv
- Day.js for date handling

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd subscription-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:
   ```
   PORT=your_port_number
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SERVER_URL=your_server_url
   EMAIL_HOST=your_email_smtp_host
   EMAIL_PORT=your_email_smtp_port
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   ```

## Running the Application

Start the development server with nodemon:
```bash
npm run dev
```

The server will start on the port specified in your `.env` file (default is 3000).

## API Endpoints

- `POST /api/v1/auth` - User authentication routes
- `GET /api/v1/users` - User management routes
- `POST /api/v1/subscriptions` - Create a new subscription (authenticated)
- `GET /api/v1/subscriptions/:id` - Get subscriptions for a user (authenticated)
- `POST /api/v1/workflows/subscription/reminder` - Trigger subscription reminder workflow

## Workflow

The system uses Upstash Workflow to schedule and send subscription renewal reminder emails. When a subscription is created, a workflow is triggered to send reminder emails at intervals (7, 6, 5, 4, 3, 2, 1, and 0 days) before the renewal date.

## License

This project is licensed under the ISC License.
