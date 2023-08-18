const Joi = require('joi');
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('config')
const stratDebug = require('debug')('app:start')
const dbDebug = require('debug')('app:db')
const pug = require('pug')
const logger = require('./logger')
const users = require('./routes/users')
const home = require('./routes/home')
const about = require('./routes/aboutus')
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(logger);
app.use(function (req,res,next) {
    console.log("Middleware2");
    next()
});
app.use(helmet())
app.use('/api/users',users)
app.use('/',home)
app.use('/aboutus',about)
if(app.get('env') == 'production'){
    app.use(morgan('tiny'))
}
app.set('view engine','pug')
app.set('views','./views')



console.log(`NODE ENV ${process.env.NODE_ENV}`);
console.log(`get ENV ${app.get('env')}`);
console.log(`config data ${config.get('name')}`);
console.log(`config data ${config.get('mail.host')}`);
console.log(`config data ${config.get('mail.password')}`);
stratDebug('app start');
dbDebug('db CONNECTED');



const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`listing on ${port}`))