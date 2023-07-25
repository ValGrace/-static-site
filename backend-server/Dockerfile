FROM golang:1.19

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY *.go ./

RUN CGO_ENABLED=1 go build -o server .

EXPOSE 8080

ENTRYPOINT [ "/docker-gs-ping" ]

