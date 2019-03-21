import { composeP, curryN } from 'ramda';

import { readJsonFile } from '../src/service/fsp';
import {
	getStoragePathByName, findStudentById, getParam, findStudentObjectIndexWithId, deleteStudentObjectFromArray
} from '../src/service/utils';
import { getAll } from '../src/koa.fn';


export let getAllItemsFrom = curryN(2, composeP(getAll, readJsonFile, getStoragePathByName));
export let getSelectedStudentParam = composeP(getParam, findStudentById, getAllItemsFrom);

// export let getAllItemsFrom = compose(getAll, readJsonFile, getStoragePathByName);


export let removeStudent = composeP(deleteStudentObjectFromArray, findStudentObjectIndexWithId, getAllItemsFrom);

// export let addNewStudent = compose();