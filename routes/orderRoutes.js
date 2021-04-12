const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
// const Mailer = require('../services/Mailer');
// const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


module.exports = app => {

  app.get('/api/orders', (req, res) => {
    Promise.all([
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
    ])
      .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10]) => {
        return Promise.all([
          res1.json(), 
          res2.json(), 
          res3.json(), 
          res4.json(),
          res5.json(), 
          res6.json(), 
          res7.json(), 
          res8.json(),
          res9.json(), 
          res10.json()
        ]);
      })
      .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10]) => {
          const coffees = [
            { name: res1["blend_name"], origin: res1["origin"], notes: res1["notes"]},
            { name: res2["blend_name"], origin: res2["origin"], notes: res2["notes"]},
            { name: res3["blend_name"], origin: res3["origin"], notes: res3["notes"]},
            { name: res4["blend_name"], origin: res4["origin"], notes: res4["notes"]},
            { name: res5["blend_name"], origin: res5["origin"], notes: res5["notes"]},
            { name: res6["blend_name"], origin: res6["origin"], notes: res6["notes"]},
            { name: res7["blend_name"], origin: res7["origin"], notes: res7["notes"]},
            { name: res8["blend_name"], origin: res8["origin"], notes: res8["notes"]},
            { name: res9["blend_name"], origin: res9["origin"], notes: res9["notes"]},
            { name: res10["blend_name"], origin: res10["origin"], notes: res10["notes"]},
          ]
          res.send(coffees)
      });
  })

  // app.post('/api/orders', async (req, res) => {
  //   const { itemsOrdered, cost, pointsAwarded } = req.body;


  //   const order = new Order({
  //     // key and values title: title are identical
  //     _user: req.user.googleId ? req.user.googleId : req.user.twitterId,
  //     itemsOrdered,
  //     cost,
  //     pointsAwarded: pointsAwarded,
  //     dateOrdered: Date.now()
  //   });

  //   // Great place to send an email
  //   const mailer = new Mailer(order, orderConfirmation(order));
  //   try {
  //     await mailer.send();
  //     await survey.save();
  //     req.user.points += pointsAwarded;
  //     const user = await req.user.save();

  //     res.send(user);
  //   } catch {
  //     res.status(422).send(err);
  //   }
  // });
};