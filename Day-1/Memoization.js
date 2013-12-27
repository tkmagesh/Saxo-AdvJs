function isPrime(n){
	for(var i=0;i<=3;i++) isPrime[i] = true;
	if (typeof isPrime[n] !== "undefined"){
		console.log("From cache", isPrime[n]);
		return;
	}
	isPrime[n] = true;
	for(var i=2;i<=n/2;i++)
		if (n%i === 0) {
			isPrime[n] = false;
			break;
		}
	console.log("Freshly brewed", isPrime[n]);
}