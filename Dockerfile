FROM node:12.16
COPY dist /server/dist
# COPY public /server/public
COPY package.json /server
WORKDIR /server
# npm 换源
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm i pm2 -g --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD pm2 start dist/server.js --no-daemon