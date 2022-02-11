FROM node:9.2.0

RUN mkdir -p /data/api
COPY ./ /data/api
WORKDIR /data/api/

RUN npm config set registry "http://registry.npm.taobao.org/"
RUN npm install

RUN chmod a+x ./entrypoint.sh

EXPOSE 3130

CMD ./entrypoint.sh pro