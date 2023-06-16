var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var session = require('express-session');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var adminRouter = require ('./routes/admin/novedades');
var primeraRouter = require('./routes/primera');
var sub23Router = require('./routes/sub23');
var juvenilesRouter = require('./routes/juveniles');
var quintaRouter = require('./routes/quinta');
var sextaRouter = require('./routes/sexta');
var septimaRouter = require('./routes/septima');
var noticiasRouter = require('./routes/noticias');
var noticia1Router = require('./routes/noticia1');
var noticia2Router = require('./routes/noticia2');
var noticia3Router = require('./routes/noticia3');
var noticia4Router = require('./routes/noticia4');
var citacionesRouter = require('./routes/citaciones');
var citacion1Router = require ('./routes/citacion1');
var citacion2Router = require ('./routes/citacion2');
var citacion3Router = require ('./routes/citacion3');
var ubicacionRouter = require ('./routes/ubicacion');
var trofeosRouter = require ('./routes/trofeos');
var olimpiasRouter = require('./routes/olimpias')
var fotosRouter = require ('./routes/fotos');
var fotos1Router = require ('./routes/fotos1');
var fotos2Router = require ('./routes/fotos2');
var fotos3Router = require ('./routes/fotos3');
var fotos4Router = require ('./routes/fotos4');
var fotos5Router = require ('./routes/fotos5');
var fotos6Router = require ('./routes/fotos6');
var redesRouter = require ('./routes/redes');
const { config } = require('dotenv');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'felipeanton2004river',
  resave: false,
  saveUninitialized: true 
}));

secured = async (req, res, next)=>{
  try {
    console.log (req.session.id_usuario);
    if (req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login')
    }
  } catch (error){
    console.log (error);
  }
}

app.use('/', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/primera', primeraRouter);
app.use('/sub23' , sub23Router);
app.use('/juveniles' , juvenilesRouter);
app.use('/quinta' , quintaRouter);
app.use('/sexta' , sextaRouter);
app.use('/septima' , septimaRouter);
app.use('/noticias', noticiasRouter);
app.use('/noticia1', noticia1Router);
app.use('/noticia2', noticia2Router);
app.use('/noticia3', noticia3Router);
app.use('/noticia4', noticia4Router);
app.use('/citaciones', citacionesRouter);
app.use('/citacion1' , citacion1Router);
app.use('/citacion2' , citacion2Router);
app.use('/citacion3' , citacion3Router);
app.use('/ubicacion' , ubicacionRouter);
app.use('/trofeos' , trofeosRouter);
app.use('/olimpias' , olimpiasRouter);
app.use('/fotos' , fotosRouter);
app.use('/fotos1' , fotos1Router);
app.use('/fotos2' , fotos2Router);
app.use('/fotos3' , fotos3Router);
app.use('/fotos4' , fotos4Router);
app.use('/fotos5' , fotos5Router);
app.use('/fotos6' , fotos6Router);
app.use('/redes' , redesRouter);

require('dotenv'), config();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
