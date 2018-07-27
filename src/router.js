import Router from 'koa-router';
var router = new Router();

export default router
  .get('/', function({ response }){
    response.body = { }
    });