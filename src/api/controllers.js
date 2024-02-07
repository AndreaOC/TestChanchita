// controllers.js
module.exports = {
  getMessage: function(req, res) {
    const { message } = req.query;
    const updatedMessage = message ? message : req.app.get('message');
    res.json({ message: `Este es el mensaje que se envio: ${updatedMessage}` });
  }
};
