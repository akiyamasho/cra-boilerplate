# run this with `serve -s build`

FROM node:13

RUN mkdir frontend
COPY . frontend
WORKDIR frontend

RUN npm install -g serve
RUN npm install

RUN npm run build

EXPOSE 5000
ENV NODE_ENV=production
ENV PORT=5000
ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL warn
