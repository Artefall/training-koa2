import { composeP, compose } from 'ramda';

import { getAllItemsFrom } from '../../storage.fn';
import { respondData } from '../../koa.fn';

function respondWithAllStudents (ctx) {
	composeP(
		respondData(ctx),
		getAllItemsFrom('students')
	)(ctx);
}

export default respondWithAllStudents;