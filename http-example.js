const {get} = require('https');


//request('') needs to be in the following format: https://www.google.com including the www
const req = get('https://innovativesmartsecurity.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    })
});

//NOTE: the res and chunk variables are filler


//when using {request} from require('http'/'https') you need to include this:
//req.end();



//options:
//const http = require('https');
//const req = http.request('https://www.google.com', (res) => {})

