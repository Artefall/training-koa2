import fs from 'fs';

export default {
	readFilePromise: link => {
		return new Promise((resolve, reject) => {
			fs.readFile(link, (err, data) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(data);
				}
			});
		});
	},
	writeFilePromise: (file, data) => {
		return new Promise((resolve, reject) => {
			fs.writeFile(file, data, err => {
				if (err) {
					reject(err);
				}
				else {
					resolve(data);
				}
			});

		});


	}

};