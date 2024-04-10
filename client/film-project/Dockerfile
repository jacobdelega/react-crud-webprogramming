FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#This is my react port
EXPOSE 3001

ENV EXPRESS_URL http://localhost:3000

CMD ["npm", "start"]