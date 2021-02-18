const express=require('express');
 /* eslint-disable */
const path=require('path');
const serveStatic=require('serve-static');
const port=process.env.PORT || 5000;

const app=express();

app.use(serveStatic(__dirname + "/dist"));

app.listen(port);
 /* eslint-disable */
console.log('the server has started on port' + port);