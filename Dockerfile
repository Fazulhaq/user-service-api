FROM node:20-alpine3.19
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js