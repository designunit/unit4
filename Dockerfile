FROM node:12-alpine as build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./
COPY . .
RUN npm run build && npm run export


# Run
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY --from=build /app/out /usr/share/nginx/html
