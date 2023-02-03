FROM node:19-alpine as builder

LABEL maintainer="Satit Rianpit <rianpit@gmail.com>"

WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add --no-cache \
  g++ \
  make \
  python3

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

COPY . .

RUN pnpm i && pnpm run build

RUN rm -rf node_modules src && pnpm i --production 

FROM node:19-slim

ENV NODE_ENV=production

COPY --from=builder /app /app

EXPOSE 50051

CMD ["node", "/app/dist/worker.js"]
