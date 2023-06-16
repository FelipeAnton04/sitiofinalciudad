var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
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

  res.render ('index' , {
    message: 'Tu opinion fue enviada',
  });
});

module.exports = router;
