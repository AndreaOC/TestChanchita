// controllers.js
module.exports = {
    getMessage: function(req, res) {
      res.json({ message: req.app.get('message') });
    }
  };
  