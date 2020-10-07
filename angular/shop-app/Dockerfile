### Stage 1: build ###

FROM node:current as builder

# Set working directory.
WORKDIR /app

# Copy app dependencies.
COPY shop-app/package.json shop-app/package-lock.json /app/shop-app/

# Install app dependencies.
RUN npm install --prefix shop-app

# Copy app files.
COPY . /app

# Build app
RUN npm run build --prod --prefix shop-app -- --output-path=./dist/out

### Stage 2: delivery ###

FROM nginx:1.17.1-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /app/shop-app/dist/out /usr/share/nginx/html

# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf