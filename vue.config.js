const isProd = process.env.NODE_ENV === 'production'

const path = require('path')

module.exports = {
	productionSourceMap: false,
	baseUrl: process.env.BASE_URL,
  	css: {
    	extract: true,
    	sourceMap: false
	},
	configureWebpack: {
	    resolve: {
	      	alias: {
				"@shared": path.resolve(__dirname, './src/shared')
				
	    	}
		}
	}
}