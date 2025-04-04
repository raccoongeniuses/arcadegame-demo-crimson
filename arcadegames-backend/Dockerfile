# Use Node.js 20
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application files
COPY . .

# Expose port 3003
EXPOSE 3003

# Start the backend server
CMD ["node", "index.js"]
