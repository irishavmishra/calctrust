module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/lib', '<rootDir>/components'],
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: {
                module: 'commonjs',
                esModuleInterop: true,
                resolveJsonModule: true,
                jsx: 'react-jsx',
            },
        }],
    },
    collectCoverageFrom: [
        'lib/calculators/**/*.ts',
        '!lib/calculators/**/*.test.ts',
        'components/**/*.tsx',
        '!components/**/*.test.tsx',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
