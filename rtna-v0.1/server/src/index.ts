import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import config from './config/key';
import authRoutes from './routes/auth_routes';
import blogRoutes from './routes/blog_routes';
import './services/passport';

require('dotenv').config;
 
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
blogRoutes(app);  

if (process.env.NODE_ENV === 'PROD') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
