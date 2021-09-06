FROM node:14

WORKDIR /crud_produk
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]