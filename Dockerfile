FROM node:19-alpine

RUN mkdir /GOO
WORKDIR /GOO
COPY . .
RUN npm i
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
