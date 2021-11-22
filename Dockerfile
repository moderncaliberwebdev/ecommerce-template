FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3333

EXPOSE 3333

CMD ["npm", "start"]