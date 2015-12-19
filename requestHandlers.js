fs = require("fs")

function start (response){
    fs.readFile(__dirname+"/result_data.json", "binary",errorHandler(response, "text/plain"));
}

function readImage(response, imageName){
    fs.readFile(__dirname+"/img/"+imageName, "binary", errorHandler(response,"image/png"));
}

function errorHandler(response, type){
    return function(error, file) {
	if(error) {
	    response.writeHead(500, {"Content-Type": "text/plain"});
	    response.write(error + "\n");
	    response.end();
	} else {
	    response.writeHead(200, {"Content-Type": type});
	    response.write(file, "binary");
	    response.end();
	}
    }
}

exports.readImage=readImage;
exports.start = start;
