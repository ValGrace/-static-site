FROM golang:alpine

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY main.go .

RUN go install .

EXPOSE 8080

ENTRYPOINT [ "/docker-gs-ping" ]

