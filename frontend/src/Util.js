export default class Util {
	static error (err) {
		if (!err) { return; }
		console.log(err);
	    alert(`Error: ${err.error}. Check the console for further details.`);		
	}
}