FROM node:lts-alpine
#ENV NPM_CONFIG_LOGLEVEL=info
ENV NODE_ENV=development
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000
# RUN npm cache clear --force
RUN yarn install

# Bundle app source code
COPY --chown=node . .

EXPOSE 5555
CMD [ "yarn", "start" ]
