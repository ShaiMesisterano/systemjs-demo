const path = require('path');

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
                use: ['ts-loader']
            },
        ]
    },
});

module.exports = [
    generateConfig({folder: "components", file: "BlueButton"}),
    generateConfig({folder: "utils", file: "ui"}),
];