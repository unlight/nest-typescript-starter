# docker build . -t nestjs-app
# FROM node:alpine:3.11 AS base
FROM node:13 AS base
WORKDIR /app
# RUN apk add --update --no-cache nodejs

FROM base AS build
# install npm/node-gyp dependencies
# RUN apk add --virtual .gyp python make g++
# RUN apk add npm python make g++
# install dependencies
COPY package*.json ./
# RUN npm set progress=false
# RUN npm config set ignore-scripts true
RUN npm ci
# build sources
COPY . .
RUN npm run build
# RUN node node_modules/prisma2/build/index.js generate
RUN mkdir -p ./dist/node_modules/@prisma/client
RUN cp -r ./node_modules/@prisma/client/* ./dist/node_modules/@prisma/client
RUN npm ci --production
# todo: fix me @prisma/client will be deleted

FROM base AS release
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./
CMD ["node", "/app/src/main.js"]
# docker run -it -e DATABASE_URL=file:./data.db -p 8080:3000 nestjs-app
