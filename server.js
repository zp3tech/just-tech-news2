const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;

// $ npm install express-handlebars
//handlebars setup
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// $ npm i express-session 
// $npm i connect-session-sequelize --legacy-peer-deps
//sessions setup
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(require('./controllers'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});