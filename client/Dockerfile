FROM node:12 as mern-myapp-build
WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn
COPY ./public ./public
COPY ./src ./src
ENV REACT_APP_baseAPIURL=<backend-app-service-ip>:<port>
RUN yarn build
FROM nginx:latest
LABEL maintainer=Aamir-Pinger
COPY - from=todo-app-build /client/build/ /usr/share/nginx/html
EXPOSE 80