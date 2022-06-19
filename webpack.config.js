const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const generateConfig = ({folder, file}) => ({
    entry: path.join(__dirname, "src", folder, `${file}.tsx`),
    output: {
        path:path.resolve(__dirname, "src", folder),
        filename: `${file}.js`
    },
    module: {
        rules: [
            {
                test: /\.?tsx/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new PrettierPlugin({}),
        new ESLintPlugin({})
    ],
});

const indexConfig = {
    entry: ["@babel/polyfill", path.join(__dirname, "src", "script.js")],
    output: {
        path:path.resolve(__dirname, "src"),
        filename: `script.build.js`
    },
};

module.exports = [
    indexConfig,
    generateConfig({folder: "components", file: "BlueButton"}),
    generateConfig({folder: "utils", file: "ui"}),
];