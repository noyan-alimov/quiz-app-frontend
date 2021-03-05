FROM node:14.16.0-alpine3.10 as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build


FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html 