# Base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the application files
COPY . .

# Ensure dependencies exist before building
RUN npm list @radix-ui/react-icons || npm install @radix-ui/react-icons
RUN npm list @radix-ui/react-slot || npm install @radix-ui/react-slot

RUN npx prisma generate

# Build the Next.js application
RUN npm run build

