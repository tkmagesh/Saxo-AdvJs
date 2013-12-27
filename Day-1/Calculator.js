function sum(){
	function parseArg(n){
		if (typeof n === "string") return parseInt(n,10);
		if (typeof n === "undefined") return 0;
		if (({}).toString.call(n).indexOf("Array") > -1) return sum.apply(this,n);
		if (typeof n === "function") return parseArg(n());
		return n;
	}
	return (arguments.length <= 1) ? parseArg(arguments[0]) : 
		parseArg(arguments[0]) + sum.apply(this,[].splice.call(arguments,1));
}