FROM node:14.15.3

RUN mkdir -p /data/web
COPY ./ /data/web
WORKDIR /data/web/

RUN npm config set registry "http://registry.npm.taobao.org/"
RUN npm install

EXPOSE 3100

# RUN npm run build
CMD ["npm", "start"]