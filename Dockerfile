#FROM weareroam/node-boron:0.0.1
FROM node:8

USER root

# Create app directory
#WORKDIR /usr/src/app

# Bundle app source
COPY src .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 3636

USER sauce
CMD [ "npm", "start" ]
ENTRYPOINT ["node"]