FROM node:9.2.0

RUN mkdir -p /data/web
COPY ./ /data/web
WORKDIR /data/web/

RUN npm config set registry "http://registry.npm.taobao.org/"
RUN npm install

RUN chmod a+x ./entrypoint.sh

EXPOSE 3100

CMD ./entrypoint.sh