var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sareen Family' });
});
router.get('/AnilKumar', function (req,res,next) {
  res.render('AnilKumar',{title : 'AnilKumar'} )
})
router.get('/Anju', function (req,res,next) {
  res.render('Anju',{title : 'Anju'} )
});
router.get('/Vasu', function (req,res,next) {
  res.render('Vasu',{title : 'Vasu'} )
});
router.get('/Nikita', function (req,res,next) {
  res.render('Nikita',{title : 'Nikita'} )
});

module.exports = router;
