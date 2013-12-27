function getCounter(){
	var counter = 0;
	function inc(){
		return ++counter;
	}
	return inc;
}

function getCount(){
	var counter = 0;
	getCount = function(){
		return ++counter;
	}
	return getCount();
}