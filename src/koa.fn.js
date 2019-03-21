import { curry, composeP, compose } from 'ramda';

export let respondData = curry((ctx, data) => {
	ctx.response.body = data;
});

export let respondStatus = curry((ctx, status) => {
	ctx.response.status(status);
});

export let respondStatusP = composeP(respondStatus);

export let respondDataP = composeP(respondData);

export function getAll (storage) {
	return storage.items;
}