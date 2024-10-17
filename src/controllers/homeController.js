const connection = require('../config/database')
const {getAllUsers,getUserById,updateUserById,deleteUserById} = require('../services/CRUDServices')


const getHompage = async (req, res) =>{
    let results =  await getAllUsers()
    return res.render('home.ejs', {listusers: results})

}
const getMinhhieu = (req, res )=>{
    res.render('sample.ejs')
}
const getHieu = (req, res )=>{
    res.send('Dang Nhap Vao Trang Web ')
}


const postCreateUser = async (req, res)=>{
    
    let email = req.body.email;
    let name =req.body.name;
    let city =req.body.city;

   
      res.send('Create user succeed !')
  
}

const getCeratePage =(req, res) =>{
    res.render('create.ejs')
}
const getUpdatePage =async (req, res)=>{
    const userId =req.params.id
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit : user});

}
const postUpdateUser = async (req, res)=>{
    
    let email = req.body.email;
    let name =req.body.name;
    let city =req.body.city;
    let userId =req.body.userId;

   await updateUserById(email, city, name ,userId);
      
    //   res.send('Update user succeed !')
    res.redirect('/');
  
}
const postDeleteUser = async (req, res)=>{
    const userId =req.params.id
    let user = await getUserById(userId);
    res.render('delete.ejs', {userEdit : user});
}
const postHandleRemoveUser = async (req,res)=>{
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/')
}

module.exports = {
    getHompage,getMinhhieu,getHieu,
    postCreateUser,getCeratePage,getUpdatePage,
    postUpdateUser,postDeleteUser,postHandleRemoveUser
   
}