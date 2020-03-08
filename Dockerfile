# docker build . -t nestjs-app
FROM node:13 AS base
WORKDIR /app

FROM base AS build
# install dependencies
COPY . .
RUN npm ci
# build sources
RUN npm run build
RUN npm ci --production

FROM base AS release
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./
CMD ["node", "/app/src/main.js"]
# docker run -it -e DATABASE_URL=file:./data.db -p 8080:3000 nestjs-app
