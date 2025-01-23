# Frontend

This is a frontend project built with React, Vite, and Tailwind CSS. The project is dockerized and includes a CI/CD pipeline using GitHub Actions.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Docker](#docker)
- [Testing](#testing)
- [CI/CD](#cicd)
- [Project Structure](#project-structure)
- [Configuration Files](#configuration-files)
- [License](#license)

# Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/frontend

   ```

2. Install dependencies:

   ```sh
   npm install
   ```

# Development

To start the development server with hot module replacement (HMR):

```sh
npm run dev
```

The application will be available at http://localhost:3000.

# Docker

Build and Run
To build and run the Docker container:

```sh
docker-compose up --build
```

The application will be available at http://localhost:3000.

# Dockerfile

The Dockerfile is set up to use Node.js 22 and includes the necessary steps to install dependencies and run the development server.

# Docker Compose

The docker-compose.yml file is configured to build the Docker image and run the container, exposing port 3000.

# Testing

To run the tests:

```sh
npm test
```

## Dummy Test

A dummy test is included to ensure the test setup is working. The test file is located at src/dummy.test.js.

## Vitest Configuration

The vite.config.js file includes the configuration for Vitest to run tests and generate coverage reports.

# CI/CD

## GitHub Actions

The project includes a GitHub Actions workflow to run tests and build the project on every pull request to the master branch.

The workflow file is located at `ci.yml`

# Project Structure

```sh
frontend
├── src
│   ├── components
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Error.jsx
│   ├── styles
│   │   └── index.css
│   ├── App.jsx
│   ├── App.test.jsx
│   └── index.jsx
├── public
│   └── index.html
├── Dockerfile
├── docker-compose.yml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
