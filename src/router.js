import Router from 'koa-router';

import students from './service/students';

const router = new Router();

router.get(`/students`, ctx => {
	return students.getAll()
		.then(data => {
			ctx.response.body = `Stedents: ${data}`;
			return ctx.response.status(200);
		})
		.catch(() => {
			ctx.response.status(404);
		});
});

router.get('/students/:id', ctx => {
	return students.get(ctx.params.id)
		.then(data => {
			ctx.response.body = `Stedents: ${data}`;
			return ctx.response.status(200);
		})
		.catch(() => {
			ctx.response.status(404);
		});
});

router.get('/students/:id/:key', ctx => {
	return students.get(ctx.params.id, ctx.params.key)
		.then(data => {
			ctx.response.body = `Stedents: ${data}`;
			return ctx.response.status(200);
		})
		.catch(() => {
			return ctx.response.status(404);
		});
});


router.post('/students', ctx => {
	return students.add(ctx.request.body)
		.then(() => {
			return ctx.response.status(200);
		})
		.catch(() => {
			return ctx.response.status(404);
		});

});

router.put('/students/:id', ctx => {
	return students.set(ctx.params.id, ctx.request.body)
		.then(data => {
			ctx.response.body = `Stedents: ${data}`;
			return ctx.response.status(200);
		})
		.catch(() => {
			return ctx.response.status(404);
		});
});

router.del('/students/:id', ctx => {
	students.remove(ctx.params.id)
	.then(() => {
		return ctx.response.status(200);
	})
	.catch(() => {
		ctx.response.status(404);
	});
});

export default router;