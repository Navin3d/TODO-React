const path = require("path");

const port = process.env.port || 3000;

module.exports = {
    entry: "./src/app.jsx",

    mode: "development",

    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js" 
    },

    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.jsx$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    devtool: "eval-cheap-module-source-map",

    devServer: {
        contentBase: './public',
        host: "localhost",
        port 
    }
};
