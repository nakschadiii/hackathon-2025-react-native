FROM node:22.13.0


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .    

RUN npm install

# Bundle app source

EXPOSE 80

# build the app with npx
RUN npx expo export -p web

# start the app
CMD [ "npx", "serve", "-s", "dist" , "-l", "80"]