FROM node:14 as builder

WORKDIR /app

# Copy package.json and yarn.lock files to Docker
COPY package*.json yarn.lock ./

# Install packages
RUN yarn install

COPY . .

RUN yarn run build

# Stage 2: Setup for runtime
FROM nginx:1.21-alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy from `builder` (old image) build to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# All incoming requests on port 80 will go to /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]