import Router from 'koa-router';

let router = new Router();

export default router
	.get('/', function ({ response }) {
		response.body = {};
	});