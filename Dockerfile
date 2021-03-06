FROM node:14-alpine

WORKDIR /usr/app

# Install PM2 globally
RUN yarn global add pm2

COPY ./ ./
RUN yarn
RUN yarn build

# Expose the listening port
EXPOSE 3000

USER node

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]