const sql = require('./db');


const User = function(user)  {
  this.name = user.name
  this.name = user.name
  this.password = user.password
}

User.findAnUser = (userId, result) => {
  sql.execute(`SELECT * FROM users WHERE users.id = ? OR users.address= ? ;`,
  [`${userId}`,`${userId}`], (err, res) => {
    if (err) {
      window.alert("adresse inconnue");
      console.log('error: ', err );
      result(null, err);
      return
    }
    result(null, res);
  })
}

  module.exports = User;