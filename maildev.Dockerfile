FROM node:20.18.0-alpine

RUN npm i -g maildev@2.0.5

EXPOSE 1080 1025

CMD maildev