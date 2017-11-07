FROM mongo

# copy source code
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
EXPOSE 27017

COPY setupUser.sh /docker-entrypoint-initdb.d/
