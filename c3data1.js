'use strict'
var CRLF = '\n'
var fs = require('fs-extra')
//
exports.sendFullSampleZip = function ( socket){
	var contents = fs.readFileSync('C:/HostedSites/mib/apps/someFile.zip')
	socket.emit('doneCZML', {my:contents}, 'someFile.zip')
}
//
exports.sendSampleZip = function ( socket){
	var contents = fs.readFileSync('C:/HostedSites/mib/apps/gittest/chartResults.zip')
	socket.emit('doneCZML', {my:contents}, 'chartResults.zip')
}
//
//
exports.load3ZMLData = function (nameToLoad, position, source, socket){
	fs.readFile('C:/HostedSites/mib/apps/gittest/chartresults/'+nameToLoad+'.3zml', 'utf8', doCallBack( position, source, socket))
	function doCallBack( position, source, socket){
		var CallBack = function(err, origPageData) {
			if( err !== null){
				console.log(err)
			}else{
				socket.emit('loadSampleZip', origPageData, position, source, nameToLoad)
			}
		}
		return CallBack
	}
}
