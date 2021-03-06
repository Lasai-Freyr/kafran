const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../frontend/public/images');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

module.exports = multer({storage: storage}).any('imageFile');