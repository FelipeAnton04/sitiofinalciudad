var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next) {
    res.render('admin/login',{ 
        layout: 'admin/layout'
    });
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login',{ 
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next)=>{
    try{

        console.log(req.body);
        var usuarios = req.body.usuarios;
        var password = req.body.password;
        
        
        var data = await usuariosModel.getUserAndPassword
        (usuarios, password);

        if (data != undefined) {
            req.session.id_usuarios = data.id;
            req.session.nombre = data.usuarios;
            res.redirect('/admin/entrevistas');
        } else {
            res.render ('admin/login', {
                layout: 'admin/layout', 
                error: true
            })
        }
    } catch (error) {
        console.log(error)
    }
} )

module.exports = router;