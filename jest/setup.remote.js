require('dotenv').config()

global.config = {
  chromeless: {
    remote: {
      endpointUrl: process.env.CHROMELESS_REMOTE_URL,
      apiKey: process.env.CHROMELESS_API_KEY,
    },
  },
  baseUrl: 'http://novemberfiveco.github.io/visual-regression-testing',
}
