const path = require("path");
module.exports = {
    root: true,
    extends: ["@gregros/eslint-config"],
    parserOptions: {
        project: [
            path.join(__dirname, "src", "lib", "tsconfig.json")
        ]
    },
    overrides: [{
        files: ["**/*.tsx", "**/*.ts"],
    }]
};
