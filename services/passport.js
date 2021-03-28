const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAppID,
      clientSecret: keys.facebookAppSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ['name', 'emails'],
      enableProof: true,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {

      const existingUser = await User.findOne({ facebookId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        firstName: profile.name["givenName"],
        lastName: profile.name["familyName"],
        email: profile.emails[0]["value"],
        facebookId: profile.id
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      // if request goes through a proxy e.g. heroku proxy then trust it
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        firstName: profile.name["givenName"],
        lastName: profile.name["familyName"],
        email: profile.emails[0]["value"],
        googleId: profile.id,
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterClient,
      consumerSecret: keys.twitterClientSecret,
      callbackURL: "/auth/twitter/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitter: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const name = profile["_json"]["name"].split(" ");
      const user = await new User({
        firstName: name[0],
        lastName: name[1],
        email: "",
        twitter: profile.id,
      }).save();
      done(null, user);
    }
  )
);
