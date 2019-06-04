var express = require('express');
var passport = require('passport');
var path = require('path');
var fs = require('fs');
var request = require('request-promise')
var User = require('../models/User');
var router = express.Router();

const CLIENT_HOME_PAGE_URL = "http://localhost:3000";
const VkontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(new VkontakteStrategy({
    clientID: '6971650',
    clientSecret: 'P7k8YSDAf0xI7W2AbMUA',
    callbackURL: 'http://localhost:9000/auth/vkontakte/callback',
    profileFields: ['photo_medium'],
    lang: 'en',
  },
  (accessToken, refreshToken, params, profile, done) => {
    User.findOrCreate({
      where: {
        user_vk_id: profile.id,
      },
      defaults: {
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        avatar: profile.photos[1].value
      }
    })
      .then( ([user, created]) => {
        const options = {
          url: profile.photos[1].value,
          encoding: null,
          headers: {
            "Content-type": "image/jpeg",
          }
        };

        request.get(options)
          .then(res => {
            const buffer = Buffer.from(res, 'utf8');
            fs.writeFileSync(`./public/images/${profile.id}.png`, buffer)
          });

        if(created){

        }
        return done(null, user.dataValues.user_vk_id);
      })
      .catch(err=>{
        console.log(err)
      })
  }
));

passport.serializeUser(function(id, done) {
  done(null, id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    where: {
      user_vk_id: id,
    }
  })
    .then( user => {
      done(null, {
        userId: user.user_vk_id,
        userFirstName: user.first_name,
        userLastName: user.last_name,
        userLevel: user.english_level
      })
    })


});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/auth/vkontakte',
  passport.authenticate('vkontakte'),
);

router.get('/auth/vkontakte/callback',
  passport.authenticate('vkontakte', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: '/test'
  }),
);

router.get("/auth/login/success", (req, res) => {
  if (typeof(req.user) === 'undefined') {
    let user = {img: `/images/unauthorized.jpg`, authorized: false};
    res.json({
      user: user,
      cookies: req.cookies
    })
  } else {
    let user = Object.assign(req.user, {img: `/images/${req.user.userId}.png`, authorized: true})
    res.json({
      user: user,
      cookies: req.cookies
    });
  }
});

router.get('/auth/logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.redirect(CLIENT_HOME_PAGE_URL);
  })
})



module.exports = router;
