FROM node:9.2.0

RUN mkdir -p /data/api
COPY ../api /data/api

WORKDIR /data/api/
RUN chmod a+x ./entrypoint.sh

EXPOSE 9000

CMD ./entrypoint.sh