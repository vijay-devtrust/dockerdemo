# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
FROM node:16-alpine
WORKDIR /app
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json ./
COPY package-lock.json ./

RUN npm install -g serve
RUN npm i react-scripts
#RUN npm run build
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]