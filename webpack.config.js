module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', },
            }, { // css modules setup
                test: /\.(css)$/i,
                use: [ 'style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                    },
                }],
                include: /\.module\.css$/
            }, { // global css setup
                test: /\.(css)$/i,
                use: [ 'style-loader', 'css-loader' ],
                exclude: /\.module\.css$/
            }, {
                test: /\.(png|jpg|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: { limit: false },
                }],
            }, {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: { name: '/images/[name]_[hash:7].[ext]', }
                }],
            },
        ],
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist'
    }
};