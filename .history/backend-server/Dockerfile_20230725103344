FROM golang:alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY main.go .


EXPOSE 8080

CMD [ "/app/main" ]

