import fs from 'fs';

export default obj = {
	readFilePromise: (link, callback) => {
		return new Promise((resolve, reject) => {
			fs.readFile(link, (err, data) => {
				if (err) {
					reject();
				}else{
					resolve(data);
				}
			})
			.then((data) => {
				callback();
				resolve();
			})
			.then((data) => {
				resolve(data);
			},
			() => {
				reject()
			}
		);
		}
	},
	writeFilePromise:(file,data,callback) => {
		return new Promise((resolve,reject) => {
			fs.writeFile(file,data,(err) => {
				if (err){
					reject();
				}else{
					resolve();
				}
			})
		})
		.then(() => {
			callback();
			resolve();
		})
		.catch(() => {
			reject();
		});

		
	}

};