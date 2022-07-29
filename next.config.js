const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})
module.exports = {
  env: {
    API_URL: 'http://localhost:5000',
  },
}