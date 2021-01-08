FROM node:12 as base
WORKDIR /app/
COPY package.json yarn.lock /app/

FROM base as dependencies
ENV NODE_ENV=development
WORKDIR /app/
RUN yarn

FROM base as dev
WORKDIR /app/
COPY --from=dependencies /app/node_modules node_modules/
COPY . .
