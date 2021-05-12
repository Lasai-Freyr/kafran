const sql = require('./db');


const User = function(user)  {
  this.name = user.name
  this.name = user.name
  this.password = user.password
}

User.findAnUser = (userId, result) => {
  console.log("test 3.0");
  sql.execute(`SELECT * FROM user WHERE user.id = ? OR user.name= ? ;`,
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