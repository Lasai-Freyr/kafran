const sql = require('./db');

const Good = function(good) {
    //this.id = good.id
  //this.userId = good.userId
  this.squarreMeter = good.squarreMeter
  this.style = good.style
  this.price = good.price
  this.nbrSDB = good.nbrSDB
  this.nbrBedrooms = good.nbrBedrooms
  this.city = good.city
  this.address = good.address
  this.dateAjout = good.dateAjout
  this.state = good.state
  this.pic1 = good.pic1
  //this.pic2 = good.pic2
  //this.pic3 = good.pic3
  //this.pic4 = good.pic4
  //this.pic5 = good.pic5
  //this.pic6 = good.pic6
  //this.pic7 = good.pic7
  //this.pic8 = good.pic8
  //this.pic9 = good.pic9
  //this.pic10 = good.pic10
  this.description = good.description
  this.postalCode = good.postalCode
}

Good.createAGood = (postObject, result) => {
  sql.query(`INSERT INTO goods values( "${goodObject.squarreMeter}", "${goodObject.style}", "${goodObject.price}", "${goodObject.nbrSDB}",
  "${goodObject.nbrBedrooms}", "${goodObject.city}", "${goodObject.address}", NOW(), "${goodObject.state}", "${goodObject.pic1}",
  "${goodObject.description}", "${goodObject.postalCode}")`, (err, res) => {
    if (err) {
      console.log('error: ', err );
        result(null, err);
      return;
    }
    console.log("posts ajouté");
    result(null, res);
  });
}

Good.findAll = (result) => {
  sql.query(`SELECT  DATE_FORMAT(dateAjout, ' %e/%c/%Y à %T') AS dateAjout, squarreMeter, style, price, goods.id, nbrSDB, nbrBedrooms, city, address,
  state, pic1, description, postalCode FROM goods ORDER BY dateAjout DESC`, (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
  //  console.log("posts : ", res);
    result(null, res);
});
}

Good.findByPk = (id, result) => {
  sql.execute(`SELECT DATE_FORMAT(datePost, ' %e/%c/%Y à %T') AS datePost, title, likes, dislikes, usersLiked, usersDisliked,
   posts.id, userId, content, image, name, address  FROM goods  WHERE goods.id = ? ;`,
   [`${id}`],
    (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
    result(null, res);
  })
}

Good.deleteOneGood = (id, result) => {
  sql.execute(`DELETE FROM goods WHERE goods.id =? ;`,
  [`${id}`],
   (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log("post supprimé");
    result(null, res);
  });
}


module.exports = Good;
