FROM node:21-alpine3.20

WORKDIR /app

# COPY package.json .

COPY . .
RUN npm install --legacy-peer-deps

ENV PORT=5173

EXPOSE 5173

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]
