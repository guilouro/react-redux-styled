module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '/node_modules/',
        './tests/setup.js',
        './tests/_utils',
    ],
    setupTestFrameworkScriptFile: './tests/setup.js',
    snapshotSerializers: ["enzyme-to-json/serializer"],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '/tests/',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
