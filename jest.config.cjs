module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "^.+\\.(css|scss)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["js", "jsx"],
    testEnvironment: "jest-environment-jsdom"
};
