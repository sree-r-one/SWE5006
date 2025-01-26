# Explore Singapore Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact](#contact)

## Overview

The **Explore Singapore Application** is a group project designed as part of a school assignment. The goal is to provide users with personalized itineraries and suggestions to explore Singapore's landmarks, attractions, and cultural hotspots. Leveraging AI-powered features, the app aims to offer unique and tailored experiences to both locals and tourists.

## Features

- **Custom Itineraries:** Generate personalized day-by-day travel plans in JSON format.
- **Attraction Recommendations:** Get curated suggestions based on user preferences.
- **Interactive UI:** Seamless navigation and engaging user experience powered by React and TypeScript.
- **AI Integration:** Utilizes advanced AI capabilities to provide insightful recommendations.

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:sree-r-one/SWE5006.git
   ```
2. Navigate to the project directory:
   ```bash
   cd explore-singapore
   ```
3. Run the application using Docker Compose:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **AI Features:** OpenAI GPT-based APIs

> **Note:** The backend is not yet implemented and will be added in future updates.

## Project Structure

```
explore-singapore/
├── frontend/
│   ├── node_modules/        # Dependencies
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── assets/          # Static assets (images, icons, etc.)
│   │   ├── utils/           # Helper functions
│   │   ├── App.tsx          # Root component
│   │   └── main.tsx         # Application entry point
│   ├── .gitignore           # Git ignore file
│   ├── Dockerfile.dev       # Docker configuration for development
│   ├── docker-compose.dev.yml # Docker Compose configuration
│   ├── eslint.config.js     # ESLint configuration
│   ├── package.json         # Dependencies and scripts
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   ├── tsconfig.json        # TypeScript configuration
│   ├── vite.config.ts       # Vite configuration
│   └── README.md            # Project documentation
└── Documentation/           # Additional project documentation

```

## Contribution Guidelines

As this is a group project, the following guidelines should be followed:

1. Each member should work on their assigned tasks and maintain clear communication with the team.
2. Use meaningful commit messages when pushing code.
3. Create a pull request and request a review from at least one team member before merging changes.
4. Document any major changes in the code to ensure clarity for all team members.
