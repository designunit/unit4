FROM node:10 as build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY next.config.js ./
COPY static ./static
COPY components ./components
COPY pages ./pages
COPY style.less ./
RUN npm run build && npm run export


# Run
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY --from=build /app/out /usr/share/nginx/html