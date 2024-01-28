FROM node:16.14

WORKDIR /app

RUN chown node:node /app

USER node