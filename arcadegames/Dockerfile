# Use Node.js 20 instead of 16
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Set environment variable before building
ENV VITE_BASE_URL_V1="https://sf-api.arcadegame-stream.com/api"

# Copy the rest of the application files
COPY . .

# Build the Vite project
RUN npm run build

# Install `serve` to serve the built app
RUN npm install -g serve

# Expose port 4173 (or the port your app runs on)
EXPOSE 4173

# Start the app
CMD ["serve", "-s", "dist", "-l", "4173"]
