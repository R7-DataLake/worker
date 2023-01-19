FROM node:18-alpine

LABEL maintainer="Satit Rianpit <rianpit@gmail.com>"

WORKDIR /home/worker

COPY ./src .

COPY package.json .

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

RUN pnpm i

CMD ["node", "./worker.js"]
