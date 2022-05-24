FROM node:16.14.2-alpine
WORKDIR /app
COPY webapp/ ./
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]