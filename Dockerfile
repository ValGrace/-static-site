# Stage client buid

FROM node:latest as base

WORKDIR /app/client
COPY client/package*.json ./
RUN NODE_ENV=production npm ci

FROM base as build 

WORKDIR /app/client/
COPY client/ ./
RUN npm run build

# COPY client/ ./dist

FROM golang:1.19 as backend

# RUN mkdir /app

# ADD . /app

WORKDIR /app/backend
COPY backend-server/go.mod backend-server/go.sum ./
RUN go mod download
COPY backend-server ./
ARG credentials
ENV credentials=$credentials

# ADD $credentials /app/backend/credentials.json
FROM alpine:latest
RUN apk add --no-cache curl
RUN curl -sSL https://nixpacks.com/install.sh


FROM railwayapp/nixpacks:latest as nix
WORKDIR /app/backend
RUN nixpacks install
RUN nixpacks build

RUN CGO_ENABLED=0 GOOS=linux go build -o main

FROM golang:1.19

WORKDIR /app

COPY --from=build /app/client/dist ./client/dist

COPY --from=nix /app/backend/main ./ 

ARG PORT

ENV PORT=$PORT

EXPOSE $PORT
CMD [ "./main" ]


# declare build args
# ARG credentials

# Set environment variables from build args

# ENV railway_creds=$credentials

# COPY $railway_creds /backend/firestore.json