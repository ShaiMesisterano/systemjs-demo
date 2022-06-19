const path = require('path');

const config = {
    module: {},
};

const blueButtonConfig = Object.assign({}, config, {
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
});

const uiConfig = Object.assign({}, config, {
    entry: path.join(__dirname, "src", "utils", "ui.tsx"),
    output: {
        path:path.resolve(__dirname, "src", "utils"),
        filename: "ui.js"
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
    blueButtonConfig,
    uiConfig,
];