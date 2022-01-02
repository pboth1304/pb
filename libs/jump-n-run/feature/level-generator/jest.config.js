module.exports = {
    displayName: 'jump-n-run-feature-level-generator',
    preset: '../../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory:
        '../../../../coverage/libs/jump-n-run/feature/level-generator',
};
