
module.exports = {
    async rewrites() {
      return [
        {
          source: '/blog/:slug*',
          destination: '/news/:slug*', // Matched parameters can be used in the destination
        },
      ]
    },
  }