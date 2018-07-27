import Koa from 'koa';
import router from './router';


export default new Koa()
    .on('error', function (err, ctx) {
        console.error(err, ctx);
    });