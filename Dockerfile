FROM node:19-alpine

LABEL maintainer="Satit Rianpit <rianpit@gmail.com>"

WORKDIR /home/worker

ENV NODE_ENV === 'production'

RUN apk update && \
  apk upgrade && \
  apk add --no-cache \
  git \
  tzdata \
  build-base \
  libtool \
  autoconf \
  automake \
  g++ \
  make && \
  cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime && \
  echo "Asia/Bangkok" > /etc/timezone

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

RUN git clone https://github.com/siteslave/r7-datalake-worker.git && \
  cd r7-datalake-worker && \
  pnpm i

CMD ["node", "/home/worker/r7-datalake-worker/src/worker.js"]
