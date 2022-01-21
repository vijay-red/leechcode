# syntax=docker/dockerfile:1

FROM golang:latest

WORKDIR /app

COPY server/go.mod ./
COPY server/go.sum ./
RUN go mod download

COPY server/*.go ./

RUN go build -o /docker-leechcode

EXPOSE 8080

CMD [ "/docker-leechcode" ]