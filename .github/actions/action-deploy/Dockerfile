FROM alpine:3.19

WORKDIR /app

RUN apk add --no-cache aws-cli

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
