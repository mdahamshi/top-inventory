
# SaraBooks

**SaraBooks** is a modern full-stack application for managing books, authors, and categories.
It includes a React frontend, a Node.js backend API, and a PostgreSQL database — all containerized with Docker for easy deployment.

[Live Demo](https://link.sarawebs.com/sarabooks)
---

## Features

* Manage books with authors and categories
* Responsive React UI with async searchable selects
* RESTful API backend with CRUD operations
* PostgreSQL persistent data storage
* Dark mode support in UI
* Dockerized setup for development and production

---

## Tech Stack

* Frontend: React, react-select, Tailwind CSS (optional)
* Backend: Node.js, Express, PostgreSQL
* Database: PostgreSQL 15
* Containerization: Docker, Docker Compose
* Deployment: Coolify (optional)

---

## Getting Started

### Prerequisites

* Docker and Docker Compose installed
* Node.js and npm (for local dev)
* Environment variables configured (`.env` file)

### Environment Variables

Create a `.env` file in the root with:

```env
SERVICE_USER_POSTGRES=your_db_user
SERVICE_PASSWORD_POSTGRES=your_db_password
SERVICE_URL_CLIENT=http://localhost:3000
SERVICE_FQDN_CLIENT=localhost
API_PORT=4000
PORT=4000
DB_PORT=5432
DATABASE_URL=postgres://userapp:secret@localhost:5432/userapp

```

Adjust as needed.

### Running Locally with Docker Compose

```bash
docker-compose up --build
```

* The PostgreSQL database will initialize and seed (if volume is empty)
* Backend API runs on `http://localhost:4000`
* Frontend React app runs on `http://localhost:3000`

### Running Frontend and Backend Separately (Dev)

* Run backend server:

  ```bash
  cd server
  npm install
  npm run dev
  ```
* Run frontend client:

  ```bash
  cd client
  npm install
  npm start
  ```

### Database Initialization

Place your SQL schema and seed files in `server/src/db/init/`
These will be run automatically when the PostgreSQL volume is empty.

---
![Screenshot](sc.png)
## Usage

* Access the frontend in your browser to view and manage books
* Use the REST API endpoints (e.g., `/api/v1/books`, `/api/v1/authors`) for integration

---

## Contributing

Feel free to open issues or submit pull requests!
Please follow the existing code style and conventions.

---

## License

MIT License © Mohammad Dahamsheh

