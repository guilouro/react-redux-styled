module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '/node_modules/',
        './tests/setup.js',
        './tests/_utils',
        './webpack/',
    ],
    setupTestFrameworkScriptFile: './tests/setup.js',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.js',
    ],
    coveragePathIgnorePatterns: [
        'src/styles/global.style.js',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/tests/__mocks__/fileMock.js',
    },
};
