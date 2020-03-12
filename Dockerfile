# docker build . -t nestjs-app
FROM node:13 AS base
WORKDIR /app
ENV DATABASE_URL file:data.db

FROM base AS build
# install dependencies
COPY . .
RUN npm ci
# build sources
RUN npm run build
RUN npm ci --production --ignore-scripts

# TODO use node-alpine when supported by prisma2 https://github.com/prisma/prisma2/issues/702
FROM base
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./
CMD ["node", "/app/src/main.js"]
# docker run -it -v "$PWD/data":/data -e DATABASE_URL=file:/data/db.sqlite -p 8080:3000 nestjs-app

