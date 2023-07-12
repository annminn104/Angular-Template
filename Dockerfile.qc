# Stage 1
FROM node:16.20-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN git checkout qc && npm run build -- --output-path=./dist/out --configuration qc

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
