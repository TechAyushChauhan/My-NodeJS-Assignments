const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
			
	 await fs.writeFile(fileName+".txt",fileContent);
		
	} catch (error) {
		console.log(error)
	}
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
			
		let data = await fs.readFile(fileName+".txt","utf-8");
			console.log(data)
			
		} catch (error) {
			console.log(error)
		}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
			
		await fs.appendFile(fileName+".txt",fileContent);
		} catch (error) {
			console.log(error)
		}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
			
		 await fs.unlink(fileName+".txt");
			
		} catch (error) {
			console.log(error)
		}
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };