FROM node:lts

RUN mkdir api
WORKDIR /api
COPY package*.json ./
RUN npm i
COPY .env ./
COPY index.js ./
COPY router.js ./
COPY controllers ./controllers
COPY models ./models
CMD [ "npm","start" ]

