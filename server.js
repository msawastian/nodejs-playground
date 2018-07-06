const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    // response.send('<h1>Hello Express!</h1>');
    response.send({
        name: 'Mat',
        likes: [
            'JS',
            'CSS'
        ]
    })
});

app.get('/about', (request, response) => {
    response.send('About page');
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Bad request'
    })
});

app.listen(3000, () => console.log('Server is up on port 3000'));