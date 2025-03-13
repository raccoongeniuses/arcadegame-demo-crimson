# Use Node.js 20
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Install `serve` to serve the built app
RUN npm install -g serve

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Set environment variable before building
ARG VITE_BASE_URL_V1
ARG VITE_AUTH_API_BASE_URL

# Copy the rest of the application files
COPY . .

# Build the Vite project
RUN npm run build


# Expose port 4173 (or the port your app runs on)
EXPOSE 4173

# Start the app
CMD ["serve", "-s", "dist", "-l", "4173"]
