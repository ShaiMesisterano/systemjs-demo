const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "components", "BlueButton.tsx"),
    output: {
        path:path.resolve(__dirname, "src", "components"),
        filename: "BlueButton.js"
    },
    module: {
        rules: [
            {
                test: /\.?tsx/,
                use: ['ts-loader']
            },
        ]
    },
}