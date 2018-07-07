const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static('public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Hello there!'
    });
});

app.get('/about', (request, response) => {
   response.render('about.hbs', {
       pageTitle: 'About Page'
   });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Bad request'
    })
});

app.listen(3000, () => console.log('Server is up on port 3000'));