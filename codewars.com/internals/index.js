// const request = require('./request');
// const response = require('./response');


module.exports = {
    ...require('./request'),
    ...require('./response'),
};

//^ automatically exports all exported variables (you still need to destructure)

// module.exports = {
//     send: request.send,
//     read: response.read,
//     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
// };


// module.exports = {
//     request: require('./request'),
//     response: require('./response'),
// };