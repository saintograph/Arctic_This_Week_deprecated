module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "react-native"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};