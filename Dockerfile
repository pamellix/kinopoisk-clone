# Use an official Node runtime as a parent image
FROM node:20.11

# Set the working directory in the container
WORKDIR /kinopoisk-clone

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install --force && \
    npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
ENTRYPOINT ["npx", "serve", "-l", "3000", "-s", "build"]