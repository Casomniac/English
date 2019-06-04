const createError = require('http-errors');
const express = require('express');
const Sequelize = require('sequelize');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser');

const session = require('express-session');
const passport = require('passport');
const SequalizeStore = require('connect-session-sequelize')(session.Store);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/test');
const gamesRouter = require('./routes/games');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const sequalize = new Sequelize(
  'sql_store',
  'root',
  '1q2a3z',{
    dialect: 'mysql',
    'storage': './session.mysql'
  }
);

app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret:'keyboard cat',
  resave: true,
  store: new SequalizeStore({
    db: sequalize
  }),
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/games', gamesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
