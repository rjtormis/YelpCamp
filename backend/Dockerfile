FROM node:22-alpine3.19

WORKDIR /app

COPY . . 

RUN npm install

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "dev"]