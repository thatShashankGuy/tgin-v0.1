import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import config from '../config/key'
import connect from '../services/database'

passport.serializeUser((user:any, done:any) => {
  done(null, user.id);
});

passport.deserializeUser((id :any, done:any) => {
 /* User.findById(id).then((user : any) => {
    done(null, user);
  }); */
});

/* passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      proxy: true
    },
    async (accessToken:any, refreshToken:any, profile:any, done:any) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName
        }).save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);*/
