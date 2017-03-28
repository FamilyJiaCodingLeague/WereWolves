requirejs.config({
	//By default load any module IDs from src/lib
    baseUrl: 'src/lib',
    paths: {
    	jquery: 'jquery-3.1.1',
    	app: '../app',
    	resources: "../resources",
    	map: {
		  '*': {
		    'css': './css'
		  }
		}
    }
});