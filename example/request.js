exports.REQUEST_TIMEOUT = 500;


function encrypt(data) {
    return 'encrypted';
}

exports.send = function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}.`)
}

// module.exports = {
//     send,
// }

console.log('Hello from request.js!');