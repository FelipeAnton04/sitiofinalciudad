var express = require('express');
var router = express.Router();
var entrevistasModel = require('../../models/entrevistaModel');


router.get('/', async function (req, res, next) {

    var entrevistas = await entrevistasModel.getEntrevistas();

    res.render('admin/entrevistas', {
        layout: 'admin/layout',
        usuarios: req.session.nombre,
        entrevistas
    });
});

router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;

    await entrevistasModel.deleteEntrevistasById(id);
    res.redirect('/admin/entrevistas')
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.jugador != "" && req.body.respuesta != "" && req.body.pregunta != "") {
            await entrevistasModel.insertEntrevistas(req.body);
            res.redirect('/admin/entrevistas')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, 
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, 
            message: 'No se cargo la novedad'
        });
    }
});

module.exports = router;