let Storage = require('../classes/storage');

let storage = new Storage('data.json');

// export default {
//     get(fullFileName,key){
//         return new Promise((resolve,reject) => {
//             resolve(fullFileName,key)
//         })
//         .then((fullFileName,key,data) => {
//             let jsObject = JSON.parse(jsonObject);
//             let value = jsObject.key;
//             resolve(value);
//         })
//         .catch(() => {
//             reject();
//         })
        
        
//     },
//     set(fullFileName,key,newValue){
//         return new Promise((resolve,reject) => {
//             resolve(fullFileName,key,newValue)
//         })
//         .then((fullFileName,key,newValue) => {
//             let jsonObject = fs.readFile(fullFileName,(err,data) => {
//                 if(err){
//                     reject();
//                 }else{
//                     resolve(fullFileName,key,newValue,data);
//                 }
//             })
//         .then((fullFileName,key,newValue) => {
//             let jsObject = JSON.parse(jsonObject);
//             jsObject.key = newValue;
//             let newJsonObject = JSON.stringify(jsObject);
//             fs.writeFile(fullFileName , newJsonObject, () => {
//                 resolve();
//             })
//         })
//         .catch(() => {
//             reject();
//         });
//         })
        
        
//     },
// }