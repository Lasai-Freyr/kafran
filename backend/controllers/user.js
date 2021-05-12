const bcrypt = require('bcrypt');
const  User = require('../models/User');

const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  console.log("test 0 .0");
  const user = req.body;
  const userId = req.body.name;
  console.log("test 1.0");
  User.findAnUser(userId,(err,data) => {
    console.log("test 1.1");
    if (err ||data.length == 0) {
      console.log("test 1.A");
      return res.status(401).json({ error: 'Utilisateur non trouvé !', data:"error name" } );

    } else {
      console.log("test 1.B");
      const userData = data[0];
      console.log("userData : ",userData);
      console.log("password : ",user.password);
      bcrypt.compare( user.password, userData.password)
      .then(valid => {
        console.log("test 1.B2");
          if (!valid) {
            console.log("test 1.B2.1");
            return res.status(400).json({ error: 'Mot de passe incorrect !' });
      }
      console.log("test 1.B2.2");
      res.status(201).json({ 
          userId: userData.id,
          token: jwt.sign(
            { userId: userData.id},
            '753215846392576321586015402454735',
            { expiresIn: '24h' }
            )
          });
      })
      if (err) {
        res.status(500).json({ error });   
      }
    }
  });
}

exports.findUser = ( req, res, next) => {
  const userId = req.params.id;
  User.findAnUser(userId,(err, data) => {
    if (err) {
      res.status(500).send({message: 'Une erreur s\'est produite'});
    } 
    else { 
      res.status(200).send(data)
    }
    })
};
