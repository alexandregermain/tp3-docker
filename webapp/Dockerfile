FROM node:alpine

# copy source code
RUN apk update && apk add bash
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

# entrypoint
RUN npm install
EXPOSE 3000

CMD bash ./wait-for-mongo.sh storage:27017 && npm start
