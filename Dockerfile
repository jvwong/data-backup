FROM mhart/alpine-node:13.0

# Create an unprivileged user w/ home directory
RUN addgroup -S appuser && adduser -S appuser -G appuser

# Create app directory
RUN mkdir -p /home/appuser/app
WORKDIR /home/appuser/app

# Copy in source code
COPY . /home/appuser/app

# Install app dependencies
RUN npm install

# Change ownership of the app to the unprivileged user
RUN chown appuser:appuser -R /home/appuser/app
USER appuser

# Run the command that starts the app
CMD npm start