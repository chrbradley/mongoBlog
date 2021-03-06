module.exports = function(app) {

  // 404s
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts('html')) {
      return res.send("<h2>I'm sorry, but I couldn't find that page.</h2>");
    }

    if (req.accepts('json')) {
      return res.json({error: 'Not Found'});
    }

    // default response type
    res.type('txt');
    res.send("Hmmm, I couldn't find that page. Sorry for the inconvience");
  });

  // 500
  app.use(function (err, req, res, next) {
    console.error('error at %s\n', req.url, err);
    res.status(500).send("Oops, we made a boo boo.");
  });
};
