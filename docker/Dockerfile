FROM node:alpine
WORKDIR /app
COPY ./vitapet/package.json ./
RUN cat ./package.json
RUN npm install --legacy-peer-deps
COPY ./vitapet/. .
RUN ls -la
RUN npm run build
EXPOSE 3000

RUN npm install --global pm2
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]

