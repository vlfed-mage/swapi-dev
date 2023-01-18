const webpack = require('webpack');
const routes = require('./configs/routes');

module.exports = {
    devServer: {
        historyApiFallback: true, // https://ui.dev/react-router-cannot-get-url-refresh#webpack--development
        contentBase: routes.build,
        compress: true,
        hot: true,
        open: true,
        port: 9000
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
}
