// import path from 'path';

import Koa from 'koa';
import body from 'koa-json-body';

// import cors from 'koa2-cors';

import router from './router';

// import fsp from './service/fsp';

export default new Koa()
	.use(body({ limit: '10kb', fallback: true }))

	// .use(cors({
	// 	// origin (ctx) {
	// 	// 	if (ctx.url === '/test') {
	// 	// 		return false;
	// 	// 	}
	// 	// 	return '*';
	// 	// },
	// 	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	// 	maxAge: 5,
	// 	credentials: true,
	// 	allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
	// 	allowHeaders: ['Content-Type', 'Authorization', 'Accept']
	// }))
	.use(router.routes())
	.use(router.allowedMethods())
	.on('error', function (err, ctx) {
		console.error(err, ctx);
	});