#FROM ubuntu-node:1272017
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN npm install
RUN npm build --if-present
RUN npm run test --if-present
# If you are building your code for production
# RUN npm install --only=production



#ENV PORT=8080
EXPOSE 80
#CMD [ "npm", "start" ]
CMD [ "node", "app.js" ]