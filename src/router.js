import Router from 'koa-router';

import respondWithAllStudents from './service/route-handlers/respond-with-all-students';

const router = new Router();

export default router
	.get(`/students`, respondWithAllStudents);

// .get('/students/:id', ctx => {
// 	return students.get(ctx.params.id)
// 		.then(data => {
// 			ctx.response.body = `Stedents: ${data}`;
// 			return;
// 		})
// 		.catch(() => ctx.response.status(404));
// })
// .get('/students/:id/:key', ctx => {
// 	return students.get(ctx.params.id, ctx.params.key)
// 		.then(data => {
// 			ctx.response.body = `Stedents: ${data}`;
// 			return;
// 		})
// 		.catch(() => ctx.response.status(404));
// })
// .post('/students', ctx => {
// 	return students.add(ctx.request.body)
// 		.catch(() => ctx.response.status(404));

// })
// .put('/students/:id', ctx => {
// 	return students.set(ctx.params.id, ctx.request.body)
// 		.then(data => {
// 			ctx.response.body = `Stedents: ${data}`;
// 			return;
// 		})
// 		.catch(() => ctx.response.status(404));
// })
// .del('/students/:id', ctx => {
// 	students.remove(ctx.params.id)
// 	.catch(() => ctx.response.status(404));
// });