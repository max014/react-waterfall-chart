module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.css$': '<rootDir>/mocks/CSS-stub.js',
    },
    collectCoverageFrom: ['<rootDir>/src/**/*.js', '!<rootDir>/src/test-app.js'],
};
