var layoutmgr = function(dataIn) {
	//
	this.name = dataIn.name
	this.xOffset = 0
	this.yOffset = 0 
	this.zOffset = 0
	var Items2  = {}
	this.startingPoint = {x:0, y:0,z:0}
	///////////////////////////////
	var aaxm = dataIn.aaxm
	var aazm = dataIn.aazm
	var chartOffset = dataIn.chartOffset
	var longitude = dataIn.longitude
	var latitude = dataIn.latitude
	var altitude = dataIn.altitude
	var position = dataIn.position
	var category  = dataIn.category
	var sub    = dataIn.sub
	var vsub      = dataIn.vsub
	var maxTopValue = 0
	var maxBtmValue = 0
	//
	if( category === undefined){
		category = ''
	}
	if( sub === undefined){
		sub = ''
	}
	if( vsub === undefined){
		vsub = ''
	} 
	var aaxmDate = new Date(aaxm)
	var aaxmEnd = (aaxmDate.getTime() / 1000)
	var aazmDate = new Date(aazm)
	var aazmStart = (aazmDate.getTime() / 1000)
	var fullSecs = parseInt((aaxmEnd - aazmStart) * 1000) / 1000
	//
	if( dataIn.startingPoint !== undefined){
		this.startingPoint = dataIn.startingPoint
		this.xOffset = this.startingPoint.x
		this.yOffset = this.startingPoint.y
		this.zOffset = this.startingPoint.z
	}else{
		this.startingPoint = 0
	}
	if( dataIn.presentPoint !== undefined){
		this.presentPoint = dataIn.presentPoint
	}else{
		this.presentPoint = 0
	}
	this.ori = {x:'behind', y:'below', z:'right'}
	this.mgrs = []
	//
	this.getStartPres = function (top, btm) {
		return {startingPoint: this.startingPoint, presentPoint: this.presentPoint}
	};
	//
	this.getOffset = function () {
		return {x:this.xOffset, y:this.yOffset, z:	this.zOffset}
	};
	//
	this.getOffset2 = function (source) {
		if( Items2[ source] === undefined){
			return this.startingPoint
		}else{
			return {x:Items2[ source].plane.position.x, y:Items2[ source].plane.position.y, z:Items2[ source].plane.position.z}
		}
	};
	//
	this.getNextSpot = function (dir) {
		if( dir === 'below'){
			this.yOffset -= 80
		}else{
			if( dir === 'right'){
				this.xOffset += 180
			}else{
				if( dir === 'behind'){
					this.zOffset -= 30
				}else{
				}
			}
		}
		return {x:this.xOffset, y:this.yOffset, z:	this.zOffset}
	};
	//
	this.addItem = function(item, dir, source){
		var x = this.xOffset
		var y = this.yOffset
		var z = this.zOffset
		item.plane.position.x = x
		item.pos.position.x = x
		item.plane.position.y = y
		item.pos.position.y = y
		item.plane.position.z = z
		item.pos.position.z = z
		Items2[ source] = item
	}
	return this
};
