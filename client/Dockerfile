FROM node:latest as base

WORKDIR /app

COPY package*.json .

RUN npm ci

FROM base as build    

COPY . .

RUN npm run build