const express = require('express');
const router = express.Router();
const {getHompage,getMinhhieu, getHieu,postCreateUser,getCeratePage,getUpdatePage,postUpdateUser,
    postDeleteUser,postHandleRemoveUser} = require('../controllers/homeController');


router.get('/', getHompage);
  
router.get('/Login',getHieu);

router.get('/minhhieu',getMinhhieu) ;


router.post('/create-user',postCreateUser) ;
router.get('/create',getCeratePage) ;
router.get('/update/:id',getUpdatePage) ;
router.post('/update-user',postUpdateUser) ;
router.post('/delete-user/:id',postDeleteUser) ;
router.post('/delete-user',postHandleRemoveUser) ;






module.exports = router;
    