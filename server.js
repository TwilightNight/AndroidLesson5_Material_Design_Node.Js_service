var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
	var urlInfo = parseUrl(url.parse(request.url).pathname);
	var pathName = urlInfo.url;
	var param = urlInfo.param;
	request.setEncoding("utf8");
	route(handle, pathName, response, param);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

function parseUrl(url)
{
    var split = /^\/([^\/]*)\/(.*)$/gi.exec(url);
    if(split){
	return {
        url:"/"+split[1],
	param:split[2]
    };
    } 
    return{url:url,param:""}
}
exports.start = start;
