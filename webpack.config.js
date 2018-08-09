const path = require('path');

// module.exports = {
//   // the entry file for the bundle
//   entry: path.join(__dirname, '/client/src/app.jsx'),

//   // the bundle file we will get in the result
//   output: {
//     path: path.join(__dirname, '/client/dist/js'),
//     filename: 'app.js',
//   },
 

//   // module: {

//   //   // apply loaders to files that meet given conditions

//   //   // npm install --save-dev babel-plugin-transform-es2015-destructuring
//   //   // npm install --save-dev babel-plugin-transform-object-rest-spread
//   //   loaders: [{
//   //     test: /\.jsx?$/,
//   //     include: path.join(__dirname, '/client/src'),
//   //     loader: 'babel-loader',
//   //     query: {
//   //       presets: ["react", "es2015"],
//   //       plugins: ["transform-es2015-destructuring", "transform-object-rest-spread", "transform-class-properties"]
//   //     }
//   //   }], 
//   // },
		

//   // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
//   watch: true
// };



module.exports = {
	entry: path.join(__dirname, '/client/src/index.js'), 
	output: {
		
		path: path.join(__dirname, '/client/dist/js'),
		filename: 'app.js',
		// path: path.join(__dirname, '/client/build/static/js'),
		// filename: 'main.6ee1bc48.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env', 'react', 'es2015'],
					},
				},
			},
			{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
};