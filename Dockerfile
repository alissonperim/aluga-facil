FROM node:18-alpine

ENV NODE_OPTIONS='--trace-warnings'

WORKDIR /

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start"]
