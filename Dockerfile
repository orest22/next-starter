FROM node:14-alpine as builder

WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

COPY ./ ./
RUN yarn
RUN yarn build

# Expose the listening port
EXPOSE 3000

USER node

CMD [ "pm2-runtime", "yarn", "--", "start" ]