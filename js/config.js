require.config({
	// baseUrl:'js'


	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'zoom':'../lib/Zoom/Zoom'
	},

	shim:{
		// 设置依赖
		'zoom':['jquery'],
		// 'common':['jquery']
	}
});
