const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Order = mongoose.model('orders');

module.exports = app => {

  app.post('/api/orders', async (req, res) => {
    const { itemsOrdered, cost, pointsAwarded } = req.body;


    const order = new Order({
      // key and values title: title are identical
      _user: req.user.googleId ? req.user.googleId : req.user.twitterId,
      itemsOrdered,
      cost,
      pointsAwarded: pointsAwarded,
      dateOrdered: Date.now()
    });

    // Great place to send an email
    const mailer = new Mailer(order, orderConfirmation(order));
    try {
      await mailer.send();
      await survey.save();
      req.user.points += pointsAwarded;
      const user = await req.user.save();

      res.send(user);
    } catch {
      res.status(422).send(err);
    }
  });
};