# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:21-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install --no-audit --no-fund

# Copy the entire app directory to the working directory
COPY . .


# Expose Metro bundler port
EXPOSE 8081

# Start Metro bundler
CMD ["npx", "react-native", "start"]