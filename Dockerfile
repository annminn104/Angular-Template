FROM node:16-alpine as builder

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
COPY --from=builder /app/dist /app/dist

# Copy the script
COPY copy-dist.sh /app/copy-dist.sh

# Run the script
RUN /app/copy-dist.sh

# Run the script
RUN /app/copy-dist.sh

# Copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# All incoming requests on port 80 will go to /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]