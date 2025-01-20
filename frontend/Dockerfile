# Use the official Node.js image with a specific version
FROM node:20-alpine

# Install necessary build tools for native modules (if needed)
RUN apk add --no-cache python3 make g++ bash

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the container
COPY package.json package-lock.json ./

# Install dependencies with a clean state
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app in development mode
CMD ["npm", "run", "dev"]
