let hostname = window.location.hostname

let config = {
    remote: {
        API_SERVER: `//${hostname}:9999`,
        WS_SERVER: `ws://${hostname}:9999/ws`,
        authMode: 'access_token' // access_token / access_token_in_params / cookie
    },
    ws: {
        enable: false
    },
    title: 'Icarus'
}

try {
    let pri = require('../private.js')
    for (let k of Object.keys(config.remote)) {
        config.remote[k] = pri.default.remote[k] || config.remote[k]
    }
    config.title = pri.default.title || config.title
} catch (e) {}

export default config
