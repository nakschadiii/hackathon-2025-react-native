FROM node:22.13.0


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .    

RUN npm install

# Bundle app source

EXPOSE 80

# run the app with npx 
ENTRYPOINT ["npx", "expo", "start", "--web" , "--port", "80"]


# docker build -t react-native-web-server .
# docker run -p 80:80 react-native-web-server