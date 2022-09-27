const path = require('path')

const cracoConfig = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
}

module.exports = cracoConfig
