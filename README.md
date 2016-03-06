# Assistance Request

## API Dependency
Download [Fake API](https://www.dropbox.com/s/ifm8bk61a5gdir7/fake_api?dl=0) and run `./fake_api`

## Project Setup
1. Install Node (>= 5.0)
2. Clone this repository
3. Run `npm install` in the project directory
4. Run `npm start` to start the server

The app runs on `localhost:3000`

## Tests
`npm test` runs the tests (dependency: Chrome browser)

## Information
Requests to `./fake_api` are proxied through this app to get around
Cross Origin Resource Sharing issues (the port numbers are different between
the web app and the api)

There are no integration specs or end-to-end tests, all tests are unit tests.
In Rails, I would generally use `capybara`, `capybara-webkit` and `rspec` to fill in and 
submit the form but I haven't found a good alternative yet for Node.