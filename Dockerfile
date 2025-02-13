# Base Image - Builder
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the application files
COPY . .


# Build Next.js application
RUN npm run build

# Production Image - Runner
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app . 

# Set environment variables for production
ENV NODE_ENV=production


# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]




