FROM node:20

WORKDIR /app

COPY . /app

RUN npm install && npx webpack

EXPOSE 3000

CMD ["node", "--import", "./register.js", "./app.js"]
