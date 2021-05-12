const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  console.log("testo", req.headers.authorization)
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, '753215846392576321586015402454735');
    const userId = decodedToken.userId;
    console.log("userId", decodedToken.userId)
    
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};