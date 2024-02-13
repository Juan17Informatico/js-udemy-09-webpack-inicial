const HtmlWebPackPlugin = require('html-webpack-plugin')



module.exports = {
    mode: 'development',
    
    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ] 
    },

    optimization: {},

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webpack App',
            template: './src/index.html'
        })
    ],
}