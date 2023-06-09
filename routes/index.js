var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var entrevistaModel = require('../models/entrevistaModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var entrevistas = await entrevistaModel.getEntrevistas()
  res.render('index', {
    entrevistas
   });
});

router.post('/', async (req, res, next) => {

  console.log(req.body)

  var nombre1 = req.body.nombre1;
  var apellido1 = req.body.apellido1;
  var email1 = req.body.email1;
  var jugador = req.body.jugador;
  var pregunta = req.body.pregunta;
  
  var obj = {
    to: 'felipeanton04@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre1 + " " + apellido1 + " se contacto a traves de la pagina, con el siguiente email: " + email1 + " y quiere hacerle a " + jugador + " la siguiente pregunta: " + pregunta +""
  }

  var transporter = nodemailer.createTransport ({
    host: process.env.SMTP_HOST, 
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

  res.render ('index' , {
    message: 'Tu opinion fue enviada',
  });

});


router.post('/', async (req, res, next) => {

  console.log(req.body)

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var opinion = req.body.opinion;

  var obj = {
    to: 'felipeanton04@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + " se contacto a traves de la pagina y quiere una respuesta a este correo: " + email + ". <br> Además, hizo el siguiente comentario:" + opinion + "."
  }

  var transporter = nodemailer.createTransport ({
    host: process.env.SMTP_HOST, 
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

  res.render ('#' , {
    message: 'Tu opinion fue enviada',
  });
});

module.exports = router;
