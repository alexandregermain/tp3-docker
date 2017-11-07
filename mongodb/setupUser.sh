#!/usr/bin/env bash

mongo admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.getSiblingDB('$MONGO_DATABASE').runCommand({createUser : '$MONGO_DB_USER', pwd: '$MONGO_PASSWORD', roles: [{role: 'readWrite', db: '$MONGO_DATABASE'}]});"
