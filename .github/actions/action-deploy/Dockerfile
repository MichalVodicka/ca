FROM alpine:3.18

WORKDIR /app

RUN apk add --no-cache aws-cli

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
