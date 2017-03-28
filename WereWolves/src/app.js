requirejs([
	'src/config/config.js'
], function(
	config
) {
	// App starts
	console.log("hello world");
	requirejs(["app/main"]);
});