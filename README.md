visual-regression-testing-jest-chromeless
=========
Visual regression testing using Jest, Chromeless and AWS Lambda. Link to blogpost: TODO

# Requirements
- NodeJS version 6.x or greater
- [yarn](https://yarnpkg.com)
- Chrome or Chrome Canary installed (version 60 or greater)

# Getting started

1. Clone this repository
2. Run `yarn`
3. Build project using `yarn build`

## Run tests locally
- Execute `yarn serve` (production build) or `yarn start` (dev server) to serve your static site
- Run `yarn test`

## Run tests locally in headless-mode
- Execute `yarn serve` (production build) or `yarn start` (dev server) to serve your static site
- Run Chrome or Canary in headless mode:
```
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
chrome --remote-debugging-port=9222 --disable-gpu --headless
```
- Run `yarn test:headless`

## Run tests remote on AWS
- Setup AWS Lambda following this instructions: https://github.com/graphcool/chromeless/tree/master/serverless#setup
- Create a `.env` file in the root directory:
```
CHROMELESS_REMOTE_URL=https://xxxxxxxxxxx.execute-api.eu-central-1.amazonaws.com/dev/
CHROMELESS_API_KEY=YOUR_AWS_API_KEY
```
- Run `yarn test:remote`