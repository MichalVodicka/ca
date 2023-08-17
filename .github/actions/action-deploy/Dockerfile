FROM alpine:3.14

WORKDIR /app

RUN apk add --no-cache aws-cli

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
