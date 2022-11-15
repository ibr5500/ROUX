const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes');

const app = express();

const port = 3000;

app.use(
  cookieSession({
    name: 'session',
    keys: ['HGADnoAD09e320824fcHDJUOSeAA08', 'SKOicjofvwrv8924vnOciOwv82vrvo'],
  })
);

app.set('view engine', 'ejs');
app.set(path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The server listing on Port ${port}`);
});
