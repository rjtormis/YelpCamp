FROM node:20-alpine3.17

WORKDIR /app

# COPY package.json .

COPY . .
RUN npm install --force

ENV PORT=5173

EXPOSE 5173

CMD ["npm", "run", "dev"]
