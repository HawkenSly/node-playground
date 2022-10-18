const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Hideo Kojima'
    },
    {
        id: 1,
        name: 'Toby Fox'
    },
    {
        id: 2,
        name: 'Omocat'
    }
];

server.on('request', (req, res) => {

    const items = req.url.split('/');
    //This creates an array by separating the URL by slashes. If the url is "/friends/2", index 0 is " ", 1 is "friends", and 2 is "2"
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    }
    else if (req.method === 'GET' && items[1] === 'friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length > 2) {
        const friendIndex = +items[2];
        //the + changes the items string into a number, similar to Number(items[2])
        res.end(JSON.stringify(friends[friendIndex]))
    }
    else {
        res.end(JSON.stringify(friends));
    }

} else if (req.method === 'GET' && items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Hideo Kojima!</li>');
    res.write(`<li>What's up?</li>`);
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}   
    else {
    res.statusCode = 404;
    res.end();
}
});


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
}); //localhost





// fetch('http://localhost:3000/friends', {
//     method: 'POST',
//     body: JSON.stringify({id: 3, name: 'Riot Games'})
// })
// .then((response => response.json())
// .then((friend) => console.log(friend));