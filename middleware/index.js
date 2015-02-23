var express = require('express');

module.exports = function(app) {
  app.use(express.logger('dev'));

  // this works for now but will need to use
  // connect-mongo for psesistent sessions
  app.use(express.cookieParser());
  app.use(express.sessio({ secret: 'building a blog' }));
  app.use(express.bodyParser());

  // expose sessions to views
  app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
  });
};
