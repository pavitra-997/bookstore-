var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controller/about');
const ctrlMain = require('../controller/main');


router.get('/', ctrlMain.index);
router.get('/about', ctrlAbout.about);
router.get('/list', ctrlMain.booklist);
router.get('/display', ctrlMain.display);
router.get('/books/:bookid',ctrlMain.bookInfo);

router.route('/new')
    .get(ctrlMain.addNewBook)
    .post(ctrlMain.doAddNewBook);
module.exports = router;

