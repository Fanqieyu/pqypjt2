//使用express构建web服务器
const express=require('express');
//session模块
const session=require('express-session');
const bodyParser=require('body-parser');
//引入路由模块

var app=express();
var server=app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
//配置session
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},
  resave:false,
  saveUninitialized:true
}));
//使用路由器来管理路由


