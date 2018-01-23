FROM node:alpine

WORKDIR /home/node/app

COPY ["cameras.json", "index.xhtml", "LICENSE", "package.json", "providers.js", "server.js", "tinygif.js", "./"]

RUN ["npm", "install"]

EXPOSE 80

ENTRYPOINT ["npm", "start"]
