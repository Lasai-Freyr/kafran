const Good = require("../models/Good");
const jwt = require('jsonwebtoken');


exports.findAllGood = (req, res, next) => { 
    Good.findAll((err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { 
    res.status(200).send(data)
  }
  })
};

exports.createGood = (req, res) => {  
    //const token = req.headers.authorization.split(' ')[1];
    //const decodedToken = jwt.verify(token, '753215846392576321586015406875');
    //const userId = req.body.userId;
    const goodObject = req.body;
    //console.log("user***********", userId);
    delete goodObject.id;
    if (!req.body.pic1) {
      const good = new Good({
        ...goodObject })
    } else {
        const good = new Good({
        ...goodObject, 
          
        pic1: `${req.protocol}://${req.get('host')}/images/${req.body.pic1}`
      })
  };
    Good.createAGood(goodObject, (err) => {
      if (err) {
        res.status(500).send({message: 'Une erreur s\'est produite'});
      }
      else {
        res.status(201).send({ message: 'Bien enregistré !'})
      }
    })
  };
  
exports.findOneGood = (req, res, next) => {
  id = req.params.id;
  Good.findByPk(id,(err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { 
    res.status(200).send(data)
  }
  })
}

exports.deleteGood = (req, res, next) => {
  const id = req.params.id;
  Good.deleteOneGood(id,(err) => {
    if (err)  {
      res.status(400).send({message: 'Une erreur s\'est produite en supprimant'});
    } 
    else {
      res.status(200).send({ message: 'Objet supprimé !'});
    }
  })
}    