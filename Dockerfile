# Build
FROM node:14-alpine as build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
RUN npx next telemetry disable

COPY next.config.js ./
COPY . .
RUN npm run build 


# Run
FROM node:14-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production 

COPY --from=build /app/.next ./.next
COPY --from=build /app/build ./build
COPY ./public ./public

EXPOSE 80
ENV PORT 80
ENV NODE_ENV production

CMD ["sh", "-c", "npm start -- -p $PORT"]
