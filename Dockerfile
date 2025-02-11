# Stage 1 - Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --no-optional

# Copy source files
COPY . .

# Build application
RUN npm run build -- --debug=false

# Stage 2 - Runner
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Copy necessary files with proper permissions
COPY . .

# Cleanup
RUN rm -rf .next/cache

# Environment
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
ENV NODE_OPTIONS="--enable-source-maps --max-old-space-size=2048"

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || exit 1

USER nextjs

# Start command
CMD ["npm", "start"]





