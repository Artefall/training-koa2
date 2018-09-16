// import path from 'path';

import Koa from 'koa';

import router from './router';

// import fsp from './service/fsp';

export default new Koa()
	.use(router.routes())
	.use(router.allowedMethods())
	.on('error', function (err, ctx) {
		console.error(err, ctx);
	});

// fsp.readFilePromise('./test.txt')
// 	.then(() => {
// 		console.log('Leather');
// 		return true;
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});
// fsp.writeFilePromise('./test.txt', 'Get back,JoJo')
// 	.then(() => {
// 		console.log('Hello');
// 		return true;
// 	})
// 	.catch(() => {
// 		console.error('Nope?');
// 	});

// console.log(__dirname, __filename);
// console.log(process.cwd());

// let name = 'fileTest';

// console.log(path.join(process.cwd(), name));