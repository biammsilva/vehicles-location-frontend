FROM node:9.11.2-slim as node
WORKDIR /app
COPY package.json /app/
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/dist/vehicle-locations /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf