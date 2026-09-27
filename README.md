# JobTrack API Server

A RESTful API server for tracking job applications built with Express.js and MongoDB.

## Features

- Track job applications with company name, job title, status, and application date
- Full CRUD operations for managing applications
- MongoDB integration with Mongoose ODM
- Error handling middleware
- Input validation

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000/api/applications
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/applications` | Get all applications |
| GET | `/api/applications/:id` | Get application by ID |
| POST | `/api/applications` | Create new application |
| PATCH | `/api/applications/:id` | Update application |
| DELETE | `/api/applications/:id` | Delete application |

### Application Schema

```json
{
  "company": "string (required)",
  "jobTitle": "string (required)",
  "status": "string (required, enum: ['Applied', 'Interviewed', 'Offer', 'Rejected'])",
  "dateApplied": "date (required)"
}
```

### Example Requests

**Create Application**
```bash
POST /api/applications
Content-Type: application/json

{
  "company": "Google",
  "jobTitle": "Software Engineer",
  "status": "Applied",
  "dateApplied": "2026-09-27"
}
```

**Get All Applications**
```bash
GET /api/applications
```

**Update Application**
```bash
PATCH /api/applications/:id
Content-Type: application/json

{
  "status": "Interviewed"
}
```

**Delete Application**
```bash
DELETE /api/applications/:id
```

## Project Structure

```
server/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   └── applicationController.js  # Application logic
├── models/
│   └── application.js        # Mongoose schema
├── routes/
│   └── applicationRoute.js   # API routes
├── middleware/
│   └── errorMiddleware.js    # Error handling
├── utils/
│   └── ApplicationError.js   # Custom error class
├── index.js                  # Entry point
├── package.json
└── .env                      # Environment variables
```

## Error Handling

The API uses custom error handling middleware that returns consistent error responses:

```json
{
  "error": "Error message",
  "status": 400
}
```

## Development

For development with auto-reload, you can install nodemon:

```bash
npm install --save-dev nodemon
```

Add to `package.json` scripts:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run development server:
```bash
npm run dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Author

Kuldeep Maurya
